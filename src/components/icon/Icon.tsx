import type { ReactElement } from "react";

import type { IconProps, IconType } from "./Icon.types";
import {
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "./icons";

export const icons: Record<IconType, (props: Omit<IconProps, "children">) => ReactElement> = {
  github: GithubIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

/*
 * The social icons, drawn in the current text colour: set the colour with
 * a text-* class on the icon or its parent.
 */
export const Icon = ({
  icon,
  ...props
}: Omit<IconProps, "children"> & { icon: IconType }): ReactElement => {
  const IconComponent = icons[icon];

  return <IconComponent {...props} />;
};
