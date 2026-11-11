"use client";

import {
  type ReactElement, useEffect, useLayoutEffect, useRef, useState 
} from "react";

interface CountUpProps {
  /* e.g. "9+": the number counts up, the rest ("+") stays */
  value: string;
}

const DURATION_MS = 1200;

/* useLayoutEffect warns on the server; it only matters in the browser */
const useBrowserLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/*
 * Counts from 0 to the number when it scrolls into view. The server renders
 * the final value, so it reads right without JavaScript or with reduced motion.
 */
export const CountUp = ({ value }: CountUpProps): ReactElement => {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match?.[2] ?? "";
  const hasNumber = Boolean(match);
  const ref = useRef<HTMLParagraphElement>(null);
  const [current, setCurrent] = useState(target);

  useBrowserLayoutEffect(() => {
    const element = ref.current;

    if (!hasNumber || !element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setCurrent(0);
    let frame = 0;

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry?.isIntersecting) {
        return;
      }

      observer.disconnect();
      const start = performance.now();

      const tick = (now: number): void => {
        const progress = Math.min((now - start) / DURATION_MS, 1);
        const eased = 1 - (1 - progress) ** 3;

        setCurrent(Math.round(eased * target));

        if (progress < 1) {
          frame = requestAnimationFrame(tick);
        }
      };

      frame = requestAnimationFrame(tick);
    }, {
      threshold: 0.6 
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [hasNumber, target]);

  return (
    <p ref={ref} className="text-5xl leading-none text-caribbean tabular-nums">
      {match ? `${current}${suffix}` : value}
    </p>
  );
};
