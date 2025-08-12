import { useEffect, useMemo, useState } from 'react';

// Tailwind default breakpoints
// sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px
const queries = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  x2l: '(min-width: 1536px)'
};

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => typeof window !== 'undefined' ? window.matchMedia(query).matches : false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    handler(mql);
    mql.addEventListener?.('change', handler);
    return () => mql.removeEventListener?.('change', handler);
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  const isSm = useMediaQuery(queries.sm);
  const isMd = useMediaQuery(queries.md);
  const isLg = useMediaQuery(queries.lg);
  const isXl = useMediaQuery(queries.xl);
  const is2Xl = useMediaQuery(queries.x2l);

  const width = typeof window !== 'undefined' ? window.innerWidth : 0;

  const device = useMemo(() => {
    if (isLg) return 'desktop';
    if (isMd) return 'tablet';
    return 'phone';
  }, [isLg, isMd]);

  return { width, device, isSm, isMd, isLg, isXl, is2Xl };
}
