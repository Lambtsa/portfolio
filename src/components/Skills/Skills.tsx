import { FC, SVGProps, useMemo } from "react";
import {
  ProjectLinkTitle,
  SkillContainer,
  SkillsContainer,
  SkillsSection,
  SkillsText,
  SkillsTitle,
  SkillsTitleContainer,
} from "./Skills.styles";
import { v4 as uuid } from "uuid";
import { ReactComponent as ProductManagementIcon } from "@assets/product_management.svg";
import { ReactComponent as WebDevelopmentIcon } from "@assets/web_development.svg";
import { ReactComponent as WebDesignIcon } from "@assets/web_design.svg";

interface SkillsType {
  name: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
}

export const Skills = (): JSX.Element => {
  const skills: SkillsType[] = useMemo(
    () => [
      {
        name: "Full Stack development",
        description:
          "From databases to websites like this one built in NextJS, I love building full stack applications in typescript where I can design the whole architecture and also a beautiful client side app.",
        icon: WebDevelopmentIcon,
      },
      {
        name: "Product Management",
        description:
          "By constantly optimising internal processes and ensuring we always have a big picture of the product and its objectives, I drive my teams by having a clear overview of all the moving pieces in order to maintain agility and productivity.",
        icon: ProductManagementIcon,
      },
      {
        name: "UX/UI and web design",
        description:
          "With a keen interest in human psychology and its effects on UX and a strong belief in user centered design, I push to implement clean and efficient design, based on a fine balance between intuition, innovation and user feedback.",
        icon: WebDesignIcon,
      },
    ],
    []
  );

  const hasSkills = !!skills.length;

  return (
    <SkillsSection>
      <SkillsTitleContainer>
        <SkillsTitle>My Key Skills</SkillsTitle>
        <SkillsText>
          Through many years of experience in business management, product
          management and web development, I have developed key skills during my
          career.
        </SkillsText>
      </SkillsTitleContainer>
      <SkillsContainer>
        {hasSkills &&
          skills.map((skill) => (
            <SkillContainer key={`${uuid()}-${skill.name}`}>
              <skill.icon />
              <ProjectLinkTitle>{skill.name}</ProjectLinkTitle>
              <SkillsText>{skill.description}</SkillsText>
            </SkillContainer>
          ))}
      </SkillsContainer>
    </SkillsSection>
  );
};
