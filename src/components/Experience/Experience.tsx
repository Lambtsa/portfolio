import { FC, SVGProps, useMemo } from "react";
import {
  ExperienceLinkTitle,
  ExperienceContainer,
  ExperienceSection,
  ExperienceText,
  ExperienceTitle,
  ExperienceTitleContainer,
  ExperienceOuterContainer,
  ExperienceTextContainer,
  ExperienceCaption,
  ExperienceInnerContainer,
  ExperienceLink,
} from "./Experience.styles";
import { v4 as uuid } from "uuid";
import { ReactComponent as UbiquitiIcon } from "@assets/ui.svg";
import { ReactComponent as SimplitooIcon } from "@assets/simplitoo.svg";
import { ReactComponent as PortailIcon } from "@assets/portail-logo.svg";
import { ReactComponent as SaltLogo } from "@assets/saltlogo.svg";

interface ExperienceType {
  name: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  url: string;
  date: string;
}

export const Experience = (): JSX.Element => {
  const experience: ExperienceType[] = useMemo(
    () => [
      {
        name: "Full-stack Javascript Engineer",
        description:
          "I am currently working as a full stack javascript engineer in the small team responsible for the in-house global e-commerce platform at Ubiquiti. I work on a daily basis with PostgreSQL, Typescript, Graphql, NextJS, Apollo server and NodeJS.",
        icon: UbiquitiIcon,
        url: "https://ui.com/",
        date: "Aug 2021 - Present",
      },
      {
        name: "Full-stack Javascript Developer",
        description:
          "I worked as a full stack javascript developer for Salt in Stockholm. From front ends in ReactJS to databases in Mongo DB, I brought all my experience of product management and UX/UI to all my new projects.",
        icon: SaltLogo,
        url: "https://www.salt.dev/",
        date: "Jan 2021 - Feb 2022",
      },
      {
        name: "Digital Product Manager",
        description:
          "As Product manager for Betao's User System/ invoicing tool, I was the bridge between the company's strategic vision and the two main products we created. I was responsible for identifying market needs and competitive opportunities while defining product strategies, feature roadmaps and enhancing customer experience.",
        icon: PortailIcon,
        url: "https://www.portail-autoentrepreneur.fr/",
        date: "Jan 2020 - Dec 2020",
      },
      {
        name: "Digital Product Manager",
        description:
          "As a Product Manager for Simplitoo, I was responsible for analysing the market and competitive environment in order to define a clear product vision and growth strategy. In this role I got to move the company to a more user focused organisation, build consensus amongst stakeholders and further develop my technical knowledge in software engineering.",
        icon: SimplitooIcon,
        url: "https://www.simplitoo.fr/",
        date: "June 2017 - Jan 2020",
      },
    ],
    []
  );

  const hasExperience = !!experience.length;

  return (
    <ExperienceSection>
      <ExperienceOuterContainer>
        <ExperienceTitleContainer>
          <ExperienceTitle>Experience</ExperienceTitle>
          <ExperienceText>
            Through many years of experience in business management, product
            management and web development, I have developed key skills during
            my career.
          </ExperienceText>
        </ExperienceTitleContainer>
        <ExperienceContainer>
          {hasExperience &&
            experience.map((ex) => (
              <ExperienceInnerContainer key={`${uuid()}-${ex.name}`}>
                <ex.icon />
                <ExperienceTextContainer>
                  <ExperienceLinkTitle>{ex.name}</ExperienceLinkTitle>
                  <ExperienceCaption>{ex.date}</ExperienceCaption>
                  <ExperienceText>{ex.description}</ExperienceText>
                  <ExperienceLink href={ex.url}>
                    See company website
                  </ExperienceLink>
                </ExperienceTextContainer>
              </ExperienceInnerContainer>
            ))}
        </ExperienceContainer>
      </ExperienceOuterContainer>
    </ExperienceSection>
  );
};
