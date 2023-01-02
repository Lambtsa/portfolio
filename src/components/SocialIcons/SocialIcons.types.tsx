import { FC, SVGProps } from "react";

export interface SocialMediaLink {
  name: string;
  link: string;
  svg: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}
