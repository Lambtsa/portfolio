import type { ReactElement } from "react";

import type { IconProps } from "@/components/icon/Icon.types";

/* A 30×30 filled icon drawn in the text colour (currentColor) */
export const BaseIcon = ({
  children,
  size = 30,
  ...props
}: IconProps): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
};
