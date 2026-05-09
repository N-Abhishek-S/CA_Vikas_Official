import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const ROOT = resolve('.');
const DEV_URL = 'http://127.0.0.1:5173/?qa=1';

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
];

const VIEWPORTS = [
  {
    name: 'desktop',
    width: 1440,
    height: 1200,
    port: 9231,
    mobile: false,
    scrollTargets: [{ id: '#gallery', filename: 'screen-gallery.png' }],
  },
  {
    name: 'mobile',
    width: 390,
    height: 1200,
    port: 9232,
    mobile: true,
    scrollTargets: [
      { id: '#team',    filename: 'screen-team-mobile.png' },
      { id: '#contact', filename: 'screen-contact-mobile.png' },
    ],
  },
];

// Seconds to wait after page load before taking screenshots
const PAGE_SETTLE_MS = 5200;
// Seconds to wait after each scroll before screenshot
const SCROLL_SETTLE_MS = 900;

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Resolve the first Chrome binary that exists on this machine.
 * Throws if none found.
 */
async function resolveChrome() {
  const { access } = await import('node:fs/promises');
  for (const p of CHROME_PATHS) {
    try {
      await access(p);
      return p;
    } catch {
      // not found — try next
    }
  }
  throw new Error(
    `Chrome not found. Checked:\n${CHROME_PATHS.map((p) => `  ${p}`).join('\n')}\n` +
    'Set the CHROME_PATH environment variable to override.',
  );
}

/**
 * Poll a JSON endpoint until it responds or we time out.
 * @param {string} url
 * @param {number} retries
 * @param {number} intervalMs
 */
async function fetchJson(url, retries = 80, intervalMs = 150) {
  let lastError;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return res.json();
    } catch (err) {
      lastError = err;
      await wait(intervalMs);
    }
  }
  throw new Error(`Timed out waiting for ${url} after ${retries} attempts. Last error: ${lastError?.message}`);
}

// ---------------------------------------------------------------------------
// CDP client
// ---------------------------------------------------------------------------
function openSocket(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.addEventListener('open',  () => resolve(ws), { once: true });
    ws.addEventListener('error', reject,             { once: true });
  });
}

/**
 * Minimal Chrome DevTools Protocol client over a WebSocket.
 * Supports send/close and event collection via addListener.
 */
function createCDPClient(socket) {
  let nextId = 0;
  const pending   = new Map();
  const listeners = new Map(); // method → Set<fn>

  socket.addEventListener('message', ({ data }) => {
    const msg = JSON.parse(data);

    // Resolve pending command
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
    }

    // Fire event listeners
    if (msg.method && listeners.has(msg.method)) {
      for (const fn of listeners.get(msg.method)) fn(msg.params);
    }
  });

  return {
    send(method, params = {}) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },

    on(method, fn) {
      if (!listeners.has(method)) listeners.set(method, new Set());
      listeners.get(method).add(fn);
    },

    close() { socket.close(); },
  };
}

// ---------------------------------------------------------------------------
// Browser event collector
// ---------------------------------------------------------------------------
function attachEventCollector(client) {
  const events = [];

  client.on('Runtime.exceptionThrown', ({ exceptionDetails }) => {
    events.push({
      type:        'exception',
      text:        exceptionDetails?.text,
      description: exceptionDetails?.exception?.description,
    });
  });

  client.on('Runtime.consoleAPICalled', ({ type, args }) => {
    events.push({
      type:  'console',
      level: type,
      text:  args?.map((a) => a.value ?? a.description).join(' '),
    });
  });

  client.on('Log.entryAdded', ({ entry }) => {
    events.push({ type: 'log', level: entry.level, text: entry.text });
  });

  return { events };
}

// ---------------------------------------------------------------------------
// Screenshot helpers
// ---------------------------------------------------------------------------
async function captureScreenshot(client, path) {
  const { data } = await client.send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  });
  await writeFile(path, Buffer.from(data, 'base64'));
  return path;
}

async function scrollTo(client, selector, settleMs = SCROLL_SETTLE_MS) {
  await client.send('Runtime.evaluate', {
    awaitPromise: true,
    expression: `document.querySelector(${JSON.stringify(selector)})
      ?.scrollIntoView({ block: 'start', behavior: 'auto' })`,
  });
  await wait(settleMs);
}

// ---------------------------------------------------------------------------
// In-page audit expression (runs inside Chrome)
// ---------------------------------------------------------------------------
const AUDIT_EXPRESSION = /* js */ `
(async () => {
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));

  const parseColor = (value) => {
    const m = value.match(/[\\d.]+/g)?.map(Number) ?? [0, 0, 0, 1];
    return { r: m[0], g: m[1], b: m[2], a: m[3] ?? 1 };
  };

  const blend = (color, base = { r: 3, g: 7, b: 13 }) => ({
    r: color.r * color.a + base.r * (1 - color.a),
    g: color.g * color.a + base.g * (1 - color.a),
    b: color.b * color.a + base.b * (1 - color.a),
    a: 1,
  });

  const luminance = ({ r, g, b }) => {
    const toLinear = (c) => {
      const v = c / 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    };
    return toLinear(r) * 0.2126 + toLinear(g) * 0.7152 + toLinear(b) * 0.0722;
  };

  const contrast = (fg, bg) => {
    const a = luminance(fg), b = luminance(bg);
    return Math.round(((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)) * 100) / 100;
  };

  const readNav = () => {
    const header = document.querySelector('.site-header');
    const link   = document.querySelector('.nav-link');
    const icon   = document.querySelector('.nav-icon-button');
    if (!header || !link || !icon) return null;
    const headerBg = blend(parseColor(getComputedStyle(header).backgroundColor));
    return {
      headerClass:    header.className,
      linkColor:      getComputedStyle(link).color,
      iconColor:      getComputedStyle(icon).color,
      headerBg:       getComputedStyle(header).backgroundColor,
      linkContrast:   contrast(parseColor(getComputedStyle(link).color), headerBg),
      iconContrast:   contrast(parseColor(getComputedStyle(icon).color), headerBg),
    };
  };

  const readMobileDrawer = async () => {
    const icon = document.querySelector('.nav-icon-button');
    if (!icon || getComputedStyle(icon).display === 'none') return null;
    icon.click();
    await wait(300);
    const drawer = document.querySelector('.mobile-drawer');
    const link   = document.querySelector('.mobile-nav-link');
    if (!drawer || !link) { icon.click(); return null; }
    const drawerBg = blend(parseColor(getComputedStyle(drawer).backgroundColor));
    const result = {
      linkColor:    getComputedStyle(link).color,
      drawerBg:     getComputedStyle(drawer).backgroundColor,
      linkContrast: contrast(parseColor(getComputedStyle(link).color), drawerBg),
    };
    icon.click();
    await wait(100);
    return result;
  };

  const sampleCanvas = (canvas) => {
    const s = document.createElement('canvas');
    s.width = s.height = 80;
    const ctx = s.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(canvas, 0, 0, 80, 80);
    const { data } = ctx.getImageData(0, 0, 80, 80);
    let lit = 0, alpha = 0, total = 0;
    for (let i = 0; i < data.length; i += 4) {
      const brightness = data[i] + data[i + 1] + data[i + 2];
      if (brightness > 18) lit++;
      if (data[i + 3] > 0) alpha++;
      total += brightness;
    }
    const pixels = data.length / 4;
    return { lit, alpha, pixels, avgBrightness: Math.round(total / pixels) };
  };

  // --- Run ---
  const navTop = readNav();
  window.scrollTo(0, 560);
  await wait(500);
  const navScrolled = readNav();
  const mobileDrawer = await readMobileDrawer();
  window.scrollTo(0, 0);

  const canvas   = document.querySelector('canvas');
  const hero     = document.querySelector('#home');
  const main     = document.querySelector('main');
  const bodyText = document.body.innerText;
  const sections = [...document.querySelectorAll('section')]
    .map((s) => s.id || s.className.split(' ')[0])
    .slice(0, 12);

  const base = {
    url:            location.href,
    sections,
    hasHeadline:    bodyText.includes('Trusted Chartered') && bodyText.includes('Financial Consultant'),
    mainTextLength: main?.innerText.length ?? 0,
    mainHtmlLength: main?.innerHTML.length ?? 0,
    bodyTextLength: bodyText.length,
    navTop,
    navScrolled,
    mobileDrawer,
  };

  if (!canvas) return { ...base, hasCanvas: false };

  const rect    = canvas.getBoundingClientRect();
  const sampled = sampleCanvas(canvas);

  return {
    ...base,
    hasCanvas:     true,
    canvasSize:    { width: canvas.width, height: canvas.height },
    canvasRect:    { width: Math.round(rect.width), height: Math.round(rect.height) },
    heroHeight:    hero ? Math.round(hero.getBoundingClientRect().height) : 0,
    canvas:        sampled,
  };
})()
`;

// ---------------------------------------------------------------------------
// Single viewport runner
// ---------------------------------------------------------------------------
async function runViewport(viewport, chrome) {
  const { name, width, height, port, mobile, scrollTargets } = viewport;

  const profile        = join(ROOT, `.chrome-visual-${name}`);
  const mainScreenshot = join(ROOT, `screen-${name}.png`);

  const args = [
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--hide-scrollbars',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profile}`,
    `--window-size=${width},${height}`,
    DEV_URL,
  ];

  const child = spawn(chrome, args, { stdio: 'ignore' });

  try {
    // Connect
    const targets = await fetchJson(`http://127.0.0.1:${port}/json/list`);
    const page    = targets.find((t) => t.type === 'page') ?? targets[0];
    if (!page) throw new Error(`No debuggable page found on port ${port}`);

    const socket = await openSocket(page.webSocketDebuggerUrl);
    const client = createCDPClient(socket);
    const { events } = attachEventCollector(client);

    // Enable domains
    await Promise.all([
      client.send('Page.enable'),
      client.send('Runtime.enable'),
      client.send('Log.enable'),
    ]);

    // Set viewport
    await client.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile,
    });

    // Wait for animations / lazy content to settle
    await wait(PAGE_SETTLE_MS);

    // Primary screenshot
    await captureScreenshot(client, mainScreenshot);

    // Scroll-target screenshots
    const extraScreenshots = [];
    for (const { id, filename } of scrollTargets) {
      await scrollTo(client, id);
      const path = join(ROOT, filename);
      await captureScreenshot(client, path);
      extraScreenshots.push({ id, path });
    }

    // In-page audit
    const auditResult = await client.send('Runtime.evaluate', {
      returnByValue:  true,
      awaitPromise:   true,
      expression:     AUDIT_EXPRESSION,
    });

    client.close();

    return {
      name,
      mainScreenshot,
      extraScreenshots,
      stats:  auditResult.result.value,
      events: events.slice(0, 20),
      errors: events.filter((e) => e.type === 'exception').length,
    };
  } finally {
    child.kill();
  }
}

// ---------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------
await mkdir(ROOT, { recursive: true });

const chrome = process.env.CHROME_PATH ?? await resolveChrome();

// Run viewports in parallel for speed, sequentially if ports conflict
const results = await Promise.all(
  VIEWPORTS.map((vp) => runViewport(vp, chrome)),
);

// Summary to stderr, full JSON to stdout (pipe-friendly)
const totalErrors   = results.reduce((n, r) => n + r.errors, 0);
const totalWarnings = results.reduce(
  (n, r) => n + r.events.filter((e) => e.level === 'warning').length,
  0,
);

process.stderr.write(
  `\n✔  Visual QA complete — ${results.length} viewports\n` +
  `   Exceptions : ${totalErrors}\n` +
  `   Warnings   : ${totalWarnings}\n` +
  results
    .map((r) => `   [${r.name}] ${r.mainScreenshot}`)
    .join('\n') +
  '\n\n',
);

console.log(JSON.stringify(results, null, 2));
