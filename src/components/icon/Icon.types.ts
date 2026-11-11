import type { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  /* Width and height in px (default 30) */
  size?: number;
  children: ReactNode;
}

export type IconType = "github" | "instagram" | "linkedin";
