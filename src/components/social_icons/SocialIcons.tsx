import type { ReactElement } from "react";

import { Icon } from "@/components/icon";
import type { IconType } from "@/components/icon/Icon.types";
import { URLS } from "@/constants/url";

interface SocialMediaLink {
  name: string;
  link: string;
  icon: IconType;
}

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "GitHub",
    link: URLS.GITHUB,
    icon: "github",
  },
  {
    name: "LinkedIn",
    link: URLS.LINKEDIN,
    icon: "linkedin",
  },
  {
    name: "Instagram",
    link: URLS.INSTAGRAM,
    icon: "instagram",
  },
];

export const SocialIcons = (): ReactElement => {
  return (
    <div className="absolute bottom-0 left-4 flex flex-row justify-center items-center gap-2 my-2 intro-appear">
      {socialMediaLinks.map((social) => (
        <a
          key={social.name}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          className="text-hot-pink transition-colors hover:text-red-purple"
        >
          <Icon icon={social.icon} />
        </a>
      ))}
    </div>
  );
};
