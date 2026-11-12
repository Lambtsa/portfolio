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
    <div className="flex flex-row items-center gap-3">
      {socialMediaLinks.map((social) => (
        <a
          key={social.name}
          aria-label={social.name}
          target="_blank"
          rel="noopener noreferrer"
          href={social.link}
          className="inline-flex justify-center items-center size-[50px] rounded-xl bg-hot-pink/10 text-hot-pink transition-colors hover:bg-hot-pink/20 hover:text-red-purple"
        >
          <Icon icon={social.icon} size={22} />
        </a>
      ))}
    </div>
  );
};
