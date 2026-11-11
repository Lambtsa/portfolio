import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void): (() => void) => {
  const media = window.matchMedia(QUERY);

  media.addEventListener("change", onChange);

  return () => media.removeEventListener("change", onChange);
};

/* True when the visitor asked for less motion. The server assumes it does, so nothing moves before hydration */
export const usePrefersReducedMotion = (): boolean => useSyncExternalStore(
  subscribe,
  () => window.matchMedia(QUERY).matches,
  () => true,
);
