// import { useEffect, useLayoutEffect, useRef } from 'react';
// import { motion as Motion } from 'framer-motion';
// import { ChevronDown, ShieldCheck, TrendingUp, FileCheck } from 'lucide-react';
// import { gsap } from '../animations/gsapSetup.js';
// import { heroStats } from '../constants/site.js';
// import Button from '../components/ui/Button.jsx';
// import MetricCounter from '../components/ui/MetricCounter.jsx';

// // ---------------------------------------------------------------------------
// // 3-D canvas background — no Three.js dependency, pure Canvas 2D
// // ---------------------------------------------------------------------------
// function useCACanvas(canvasRef) {
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     let animId;
//     let time = 0;
//     const mouse = { x: canvas.offsetWidth * 0.72, y: canvas.offsetHeight * 0.4 };

//     const GRID_COLS = 22;
//     const GRID_ROWS = 14;
//     let particles = [];
//     let cubes = [];

//     function W() { return canvas.width; }
//     function H() { return canvas.height; }

//     function buildScene() {
//       particles = [];
//       cubes = [];

//       for (let r = 0; r < GRID_ROWS; r++) {
//         for (let c = 0; c < GRID_COLS; c++) {
//           const isGold = Math.random() < 0.08;
//           particles.push({
//             c, r, isGold,
//             phase: Math.random() * Math.PI * 2,
//             speed: 0.6 + Math.random() * 0.8,
//             size: isGold ? 1.8 + Math.random() * 1.2 : 0.8 + Math.random() * 1.2,
//           });
//         }
//       }

//       for (let i = 0; i < 14; i++) {
//         cubes.push({
//           x: W() * 0.5 + Math.random() * W() * 0.5,
//           y: Math.random() * H(),
//           z: 0.3 + Math.random() * 0.7,
//           size: 20 + Math.random() * 38,
//           rotX: Math.random() * Math.PI * 2,
//           rotY: Math.random() * Math.PI * 2,
//           rotZ: Math.random() * Math.PI * 2,
//           speedX: (Math.random() - 0.5) * 0.012,
//           speedY: (Math.random() - 0.5) * 0.008,
//           speedZ: (Math.random() - 0.5) * 0.015,
//           type: Math.floor(Math.random() * 3),
//           isGold: Math.random() < 0.35,
//           alpha: 0.08 + Math.random() * 0.18,
//         });
//       }
//     }

//     function resize() {
//       canvas.width  = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//       buildScene();
//     }
//     resize();

//     const ro = new ResizeObserver(resize);
//     ro.observe(canvas);

//     const onMouse = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouse.x = e.clientX - rect.left;
//       mouse.y = e.clientY - rect.top;
//     };
//     window.addEventListener('mousemove', onMouse);

//     // -- helpers --
//     function drawCube(cx, cy, size, rX, rY, rZ, alpha, isGold) {
//       const h = size * 0.5;
//       const verts = [
//         [-h,-h,-h],[h,-h,-h],[h,h,-h],[-h,h,-h],
//         [-h,-h,h],[h,-h,h],[h,h,h],[-h,h,h],
//       ];
//       const edges = [
//         [0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],
//       ];
//       const cosX = Math.cos(rX), sinX = Math.sin(rX);
//       const cosY = Math.cos(rY), sinY = Math.sin(rY);
//       const cosZ = Math.cos(rZ), sinZ = Math.sin(rZ);
//       const proj = verts.map(([x, y, z]) => {
//         const y1 = y * cosX - z * sinX, z1 = y * sinX + z * cosX;
//         const x2 = x * cosY + z1 * sinY, z2 = -x * sinY + z1 * cosY;
//         const x3 = x2 * cosZ - y1 * sinZ, y3 = x2 * sinZ + y1 * cosZ;
//         const s = 400 / (400 + z2 + 100);
//         return [cx + x3 * s, cy + y3 * s];
//       });
//       ctx.strokeStyle = isGold ? `rgba(196,160,88,${alpha})` : `rgba(58,100,170,${alpha})`;
//       ctx.lineWidth = isGold ? 1.2 : 0.8;
//       edges.forEach(([a, b]) => {
//         ctx.beginPath();
//         ctx.moveTo(proj[a][0], proj[a][1]);
//         ctx.lineTo(proj[b][0], proj[b][1]);
//         ctx.stroke();
//       });
//     }

//     function drawRing(cx, cy, r, rX, alpha, isGold) {
//       const cosX = Math.cos(rX);
//       ctx.beginPath();
//       for (let i = 0; i <= 32; i++) {
//         const a = (i / 32) * Math.PI * 2;
//         const x = cx + r * Math.cos(a);
//         const y = cy + r * Math.sin(a) * cosX;
//         i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
//       }
//       ctx.strokeStyle = isGold ? `rgba(196,160,88,${alpha})` : `rgba(58,100,170,${alpha})`;
//       ctx.lineWidth = isGold ? 1.5 : 1;
//       ctx.stroke();
//     }

//     function drawBars(cube) {
//       const bars = [0.40, 0.65, 0.50, 0.80, 0.60, 0.90, 0.70];
//       const bw = cube.size * 0.11;
//       ctx.strokeStyle = cube.isGold
//         ? `rgba(196,160,88,${cube.alpha})`
//         : `rgba(58,100,170,${cube.alpha})`;
//       ctx.lineWidth = 0.8;
//       bars.forEach((h, i) => {
//         const bh = cube.size * h;
//         ctx.strokeRect(
//           cube.x + i * bw * 1.5 - bars.length * bw * 0.75,
//           cube.y - bh, bw, bh,
//         );
//       });
//     }

//     function draw() {
//       time += 0.012;
//       ctx.clearRect(0, 0, W(), H());

//       // Radial glow blobs
//       const g1 = ctx.createRadialGradient(W()*0.72, H()*0.35, 0, W()*0.72, H()*0.35, W()*0.42);
//       g1.addColorStop(0, 'rgba(26,74,138,0.22)');
//       g1.addColorStop(1, 'transparent');
//       ctx.fillStyle = g1; ctx.fillRect(0, 0, W(), H());

//       const g2 = ctx.createRadialGradient(W()*0.88, H()*0.7, 0, W()*0.88, H()*0.7, W()*0.3);
//       g2.addColorStop(0, 'rgba(196,160,88,0.09)');
//       g2.addColorStop(1, 'transparent');
//       ctx.fillStyle = g2; ctx.fillRect(0, 0, W(), H());

//       // Animated chart line (right half only)
//       ctx.save();
//       ctx.beginPath();
//       ctx.rect(W() * 0.38, 0, W() * 0.62, H());
//       ctx.clip();
//       ctx.beginPath();
//       for (let i = 0; i < 38; i++) {
//         const x = W() * 0.44 + (i / 37) * W() * 0.52;
//         const y = H() * 0.45 - i * 2.8
//           + Math.sin(i * 0.45 + time * 0.8) * 55
//           + Math.sin(i * 0.9  + time * 0.5) * 25;
//         i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
//       }
//       ctx.strokeStyle = 'rgba(196,160,88,0.55)';
//       ctx.lineWidth = 2; ctx.lineJoin = 'round'; ctx.stroke();
//       ctx.shadowColor = '#c4a058'; ctx.shadowBlur = 14;
//       ctx.strokeStyle = 'rgba(196,160,88,0.22)';
//       ctx.lineWidth = 7; ctx.stroke();
//       ctx.shadowBlur = 0;
//       ctx.restore();

//       // Particle grid
//       const mR = 180;
//       particles.forEach(p => {
//         const bx = (p.c / (GRID_COLS - 1)) * W();
//         const wave = Math.sin(time * p.speed + p.phase + p.c * 0.3 + p.r * 0.2) * 14;
//         const px = bx + wave * 0.5;
//         const py = (p.r / (GRID_ROWS - 1)) * H() + wave;
//         const dist = Math.hypot(px - mouse.x, py - mouse.y);
//         const inf = Math.max(0, 1 - dist / mR);
//         ctx.beginPath();
//         ctx.arc(px, py, p.size + inf * 2.5, 0, Math.PI * 2);
//         ctx.fillStyle = p.isGold
//           ? `rgba(196,160,88,${0.25 + inf * 0.6})`
//           : `rgba(80,130,210,${0.08 + inf * 0.3})`;
//         ctx.fill();
//         if (inf > 0.3 && p.isGold) {
//           ctx.beginPath();
//           ctx.arc(px, py, p.size + 3, 0, Math.PI * 2);
//           ctx.strokeStyle = `rgba(196,160,88,${inf * 0.3})`;
//           ctx.lineWidth = 0.8; ctx.stroke();
//         }
//       });

//       // 3-D floating objects
//       cubes.forEach(c => {
//         c.rotX += c.speedX; c.rotY += c.speedY; c.rotZ += c.speedZ;
//         c.y -= 0.12 * c.z;
//         if (c.y < -c.size) c.y = H() + c.size;
//         if (c.type === 0) drawCube(c.x, c.y, c.size, c.rotX, c.rotY, c.rotZ, c.alpha, c.isGold);
//         else if (c.type === 1) {
//           drawRing(c.x, c.y, c.size * 0.6, c.rotX + time * 0.3, c.alpha, c.isGold);
//           drawRing(c.x, c.y, c.size * 0.4, c.rotY + time * 0.5, c.alpha * 0.7, c.isGold);
//         } else {
//           drawBars(c);
//         }
//       });

//       // Connection lines (right grid half only)
//       for (let i = 0; i < particles.length; i++) {
//         if (particles[i].c < GRID_COLS * 0.45) continue;
//         for (let j = i + 1; j < particles.length; j++) {
//           if (particles[j].c < GRID_COLS * 0.45) continue;
//           const wave1 = Math.sin(time * particles[i].speed + particles[i].phase) * 14;
//           const wave2 = Math.sin(time * particles[j].speed + particles[j].phase) * 14;
//           const px1 = (particles[i].c / (GRID_COLS - 1)) * W() + wave1 * 0.5;
//           const py1 = (particles[i].r / (GRID_ROWS - 1)) * H() + wave1;
//           const px2 = (particles[j].c / (GRID_COLS - 1)) * W() + wave2 * 0.5;
//           const py2 = (particles[j].r / (GRID_ROWS - 1)) * H() + wave2;
//           const dist = Math.hypot(px2 - px1, py2 - py1);
//           if (dist < 65) {
//             ctx.beginPath();
//             ctx.moveTo(px1, py1); ctx.lineTo(px2, py2);
//             ctx.strokeStyle = `rgba(80,130,210,${(1 - dist / 65) * 0.07})`;
//             ctx.lineWidth = 0.5; ctx.stroke();
//           }
//         }
//       }

//       animId = requestAnimationFrame(draw);
//     }

//     draw();

//     return () => {
//       cancelAnimationFrame(animId);
//       ro.disconnect();
//       window.removeEventListener('mousemove', onMouse);
//     };
//   }, [canvasRef]);
// }

// // ---------------------------------------------------------------------------
// // Floating side-cards
// // ---------------------------------------------------------------------------
// const cardBase =
//   'absolute z-20 rounded-2xl border border-gold/20 bg-[#02060e]/80 backdrop-blur-2xl p-5 hidden lg:block';

// function GSTCard() {
//   return (
//     <div className={`${cardBase} right-14 top-[36%] w-52`}
//          style={{ animation: 'fadeUp 0.6s 1.9s ease both' }}>
//       <div className="mb-3 text-3xl">📊</div>
//       <p className="text-sm font-semibold text-white/90">GST Filing</p>
//       <p className="mt-0.5 text-xs text-white/45">Completed this quarter</p>
//       <p className="mt-2 text-2xl font-bold text-gold">342 Returns</p>
//     </div>
//   );
// }

// function ComplianceCard() {
//   const rows = [
//     { label: 'Income Tax', val: '✓ Filed' },
//     { label: 'GST Returns', val: '✓ Filed' },
//     { label: 'ROC Filing',  val: '✓ Filed' },
//   ];
//   return (
//     <div className={`${cardBase} right-14 top-[60%] w-52`}
//          style={{ animation: 'fadeUp 0.6s 2.05s ease both' }}>
//       <div className="mb-3 flex items-center gap-2">
//         <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
//         <span className="text-xs text-white/60">All systems compliant</span>
//       </div>
//       {rows.map(r => (
//         <div key={r.label}
//              className="flex justify-between border-b border-white/6 py-1 text-xs last:border-0">
//           <span className="text-white/50">{r.label}</span>
//           <span className="font-semibold text-emerald-400">{r.val}</span>
//         </div>
//       ))}
//     </div>
//   );
// }

// // ---------------------------------------------------------------------------
// // Hero Section
// // ---------------------------------------------------------------------------
// export default function HeroSection() {
//   const scope     = useRef(null);
//   const canvasRef = useRef(null);
//   const qaMode    = new URLSearchParams(window.location.search).has('qa');

//   useCACanvas(canvasRef);

//   useLayoutEffect(() => {
//     if (qaMode) return undefined;
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({ delay: 1.08 });
//       tl.from('[data-hero-kicker]',  { autoAlpha: 0, y: 18, duration: 0.65 })
//         .from('[data-hero-title]',   { autoAlpha: 0, y: 44, filter: 'blur(14px)', duration: 0.95 }, '-=0.25')
//         .from('[data-hero-copy]',    { autoAlpha: 0, y: 24, duration: 0.75 }, '-=0.35')
//         .from('[data-hero-actions]', { autoAlpha: 0, y: 24, duration: 0.65 }, '-=0.4')
//         .from('[data-hero-stat]',    { autoAlpha: 0, y: 24, stagger: 0.08, duration: 0.7 }, '-=0.35');
//     }, scope);
//     return () => ctx.revert();
//   }, [qaMode]);

//   return (
//     <section
//       id="home"
//       ref={scope}
//       className="relative min-h-svh overflow-hidden bg-[#02060e] text-white"
//     >
//       {/* ── 3-D animated canvas ── */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 h-full w-full"
//         aria-hidden="true"
//       />

//       {/* ── Gradient overlays ── */}
//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(2,6,14,0.97)_0%,rgba(2,6,14,0.80)_42%,rgba(2,6,14,0.32)_100%)]" />
//       <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#02060e] to-transparent" />

//       {/* Gold left edge accent */}
//       <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

//       {/* ── Main content ── */}
//       <div className="relative mx-auto flex min-h-svh max-w-[1440px] flex-col justify-center px-5 pb-12 pt-28 sm:px-8 lg:px-12">
//         <div className="max-w-4xl">

//           {/* Kicker badge */}
//           <div
//             data-hero-kicker
//             className="inline-flex items-center gap-3 rounded-full border border-white/[0.18] bg-white/[0.075] px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/85 backdrop-blur-xl"
//           >
//             <ShieldCheck size={15} className="text-gold" />
//             Chartered Accountant Office · Est. 2003
//           </div>

//           {/* Headline */}
//           <h1
//             data-hero-title
//             className="mt-7 font-display text-[clamp(3.05rem,8vw,8.7rem)] font-semibold leading-[0.88] tracking-[-0.045em]"
//           >
//             CA Rajesh Mehta
//             <span className="mt-4 block max-w-4xl text-[clamp(1.78rem,5vw,5.2rem)] leading-[0.96] text-white/90">
//               <span className="block text-gold sm:inline">Trusted</span>
//               <span className="block sm:inline"> Chartered Accountant</span>
//               <span className="block">&amp; Financial Consultant</span>
//             </span>
//           </h1>

//           {/* Copy */}
//           <p
//             data-hero-copy
//             className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-xl sm:leading-9"
//           >
//             Taxation · Auditing · GST · Compliance · Strategic Business Finance —
//             delivered with precision, confidentiality, and boardroom-level clarity
//             for clients across India for over two decades.
//           </p>

//           {/* CTA buttons */}
//           <div data-hero-actions className="mt-9 flex flex-col gap-3 sm:flex-row">
//             <Button href="#contact" size="lg" variant="gold">
//               Book a Consultation
//             </Button>
//             <Button href="#services" size="lg" variant="ghost">
//               Explore Services
//             </Button>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div className="mt-16 grid overflow-hidden rounded-xl border border-white/10 bg-[#03070d]/50 py-2 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
//           {heroStats.map((stat) => (
//             <div
//               data-hero-stat
//               key={stat.label}
//               className="border-white/10 px-6 py-5 lg:border-r lg:last:border-r-0"
//             >
//               <MetricCounter
//                 value={stat.value}
//                 suffix={stat.suffix}
//                 label={stat.label}
//                 light
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ── Floating side cards ── */}
//       <GSTCard />
//       <ComplianceCard />

//       {/* ── Scroll hint ── */}
//       <Motion.a
//         href="#about"
//         className="absolute bottom-6 right-5 hidden h-14 w-14 place-items-center rounded-full border border-white/18 bg-white/[0.075] text-white backdrop-blur-xl lg:grid"
//         animate={{ y: [0, 8, 0] }}
//         transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
//         aria-label="Scroll to about"
//       >
//         <ChevronDown size={22} />
//       </Motion.a>

//       {/* Keyframe for floating cards (GSAP handles the hero text) */}
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </section>
//   );
// }