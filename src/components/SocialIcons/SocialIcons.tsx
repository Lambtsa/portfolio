import { v4 as uuid } from "uuid";
import { SocialIconsWrapper } from "./SocialIcons.styles";
import URL from "@constants/url";

import { ReactComponent as GithubIcon } from "@assets/github.svg";
import { ReactComponent as InstagramIcon } from "@assets/instagram.svg";
import { ReactComponent as LinkedInIcon } from "@assets/linkedin.svg";
import { SocialMediaLink } from "./SocialIcons.types";

const socialMediaLinks: SocialMediaLink[] = [
  {
    name: "github",
    link: URL.GITHUB,
    svg: GithubIcon,
  },
  {
    name: "linkedIn",
    link: URL.LINKEDIN,
    svg: LinkedInIcon,
  },
  {
    name: "instagram",
    link: URL.INSTAGRAM,
    svg: InstagramIcon,
  },
];

export const SocialIcons = (): JSX.Element => {
  return (
    <SocialIconsWrapper>
      {socialMediaLinks &&
        socialMediaLinks.map((icon) => (
          <a
            aria-label={icon.name}
            target="_blank"
            rel="noopener noreferrer"
            key={`${icon.name}-${uuid()}`}
            href={icon.link}
          >
            <icon.svg />
          </a>
        ))}
    </SocialIconsWrapper>
  );
};
