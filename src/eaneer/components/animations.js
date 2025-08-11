import { useReducedMotion } from 'framer-motion';

// Hook wrapper to get variants respecting reduced-motion
export function useMotionPrefs() {
  const prefersReducedMotion = useReducedMotion();

  const fadeIn = (delay = 0, duration = 0.6) => ({
    hidden: { opacity: 0 },
    show: prefersReducedMotion
      ? { opacity: 1, transition: { duration: 0 } }
      : { opacity: 1, transition: { delay, duration, ease: 'easeOut' } },
  });

  const fadeInUp = (delay = 0, distance = 20, duration = 0.6) => ({
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : distance },
    show: prefersReducedMotion
      ? { opacity: 1, y: 0, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { delay, duration, ease: 'easeOut' } },
  });

  const fadeInLeft = (delay = 0, distance = 30, duration = 0.6) => ({
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -distance },
    show: prefersReducedMotion
      ? { opacity: 1, x: 0, transition: { duration: 0 } }
      : { opacity: 1, x: 0, transition: { delay, duration, ease: 'easeOut' } },
  });

  const fadeInRight = (delay = 0, distance = 30, duration = 0.6) => ({
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : distance },
    show: prefersReducedMotion
      ? { opacity: 1, x: 0, transition: { duration: 0 } }
      : { opacity: 1, x: 0, transition: { delay, duration, ease: 'easeOut' } },
  });

  const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
    hidden: {},
    show: prefersReducedMotion
      ? { transition: { staggerChildren: 0, delayChildren: 0 } }
      : { transition: { staggerChildren: stagger, delayChildren } },
  });

  return { prefersReducedMotion, fadeIn, fadeInUp, fadeInLeft, fadeInRight, staggerContainer };
}
