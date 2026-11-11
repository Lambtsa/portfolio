"use client";

import {
  type ReactElement, useEffect, useState 
} from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface RotatingRoleProps {
  roles: string[];
}

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

/*
 * Types each role, holds it, deletes it and moves to the next, forever.
 * Screen readers get the full list once; with reduced motion the first
 * role simply stays.
 */
export const RotatingRole = ({ roles }: RotatingRoleProps): ReactElement => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [length, setLength] = useState(roles[0]?.length ?? 0);
  const [isDeleting, setIsDeleting] = useState(false);
  const isAnimated = !usePrefersReducedMotion();

  useEffect(() => {
    if (!isAnimated) {
      return;
    }

    const role = roles[roleIndex] ?? "";
    let delay = isDeleting ? DELETE_MS : TYPE_MS;

    if (!isDeleting && length === role.length) {
      delay = HOLD_MS;
    }

    const timer = window.setTimeout(() => {
      if (!isDeleting && length === role.length) {
        setIsDeleting(true);
      } else if (isDeleting && length === 0) {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setLength((current) => current + (isDeleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isAnimated, isDeleting, length, roleIndex, roles]);

  const text = (roles[roleIndex] ?? "").slice(0, length);

  return (
    <p className="min-h-[1.2em] mt-4 text-[clamp(26px,3.2vw,40px)] leading-tight whitespace-nowrap text-caribbean">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="caret" />
      </span>
    </p>
  );
};
