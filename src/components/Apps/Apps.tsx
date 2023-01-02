import {
  AppsContainer,
  AppsInnerContainer,
  AppsSection,
  AppsText,
  AppsTitle,
  TextContainer,
} from "./Apps.styles";
import { ReactComponent as Typescript } from "@assets/typescript.svg";
import { ReactComponent as Figma } from "@assets/figma.svg";
import { ReactComponent as Next } from "@assets/nextjs.svg";
import { ReactComponent as GraphQL } from "@assets/graphql.svg";
import { ReactComponent as Node } from "@assets/nodejs.svg";
import { ReactComponent as Python } from "@assets/python.svg";
import { ReactComponent as Svelte } from "@assets/svelte.svg";
import { ReactComponent as Postgresql } from "@assets/postgreSQL.svg";

export const Apps = (): JSX.Element => {
  return (
    <AppsSection>
      <AppsContainer>
        <TextContainer>
          <AppsTitle>My tech stack</AppsTitle>
          <AppsText>
            Here are some of the technologies, languages or applications that I
            work with on a daily basis.
          </AppsText>
        </TextContainer>
        <AppsInnerContainer>
          <Typescript />
          <Figma />
          <Next />
          <GraphQL />
          <Node />
          <Python />
          <Svelte />
          <Postgresql />
        </AppsInnerContainer>
      </AppsContainer>
    </AppsSection>
  );
};
