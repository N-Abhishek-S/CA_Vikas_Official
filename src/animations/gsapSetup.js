import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export function initGsap() {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({
    ease: 'power3.out',
    duration: 0.9,
  });
  registered = true;
}

initGsap();

export { gsap, ScrollTrigger };
