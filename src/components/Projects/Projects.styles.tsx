import { CONTAINER } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const ProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 96px 0;
  max-width: ${CONTAINER.PC}px;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    padding: 48px 16px;
  }
`;

export const ProjectsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
`;

export const ProjectsTitle = styled.h2`
  color: ${(props) => props.theme.colors.mediumStateBlue};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  width: 100%;
`;

export const ProjectsText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
`;

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px 16px;
  border-radius: 20px;
  margin: 16px;
  text-decoration: none;
  text-align: center;

  :hover {
    background-color: ${(props) => props.theme.colors.linen20};
  }
`;

export const ProjectLinkTitle = styled.h3`
  color: ${(props) => props.theme.colors.linen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 24px;
  width: 100%;
`;
