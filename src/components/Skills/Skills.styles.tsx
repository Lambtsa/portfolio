import { CONTAINER } from "@constants/layout";
import styled from "styled-components";

export const SkillsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 96px 0;
  max-width: ${CONTAINER.PC}px;

  @media screen and (max-width: ${CONTAINER.MOBILE}px) {
    padding: 48px 16px;
  }
`;

export const SkillsTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  max-width: ${CONTAINER.TABLET}px;
`;

export const SkillsTitle = styled.h2`
  color: ${(props) => props.theme.colors.bluetiful};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  width: 100%;
`;

export const SkillsText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
`;

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 32px 16px;
  border-radius: 20px;
  margin: 16px;
  text-align: center;
`;

export const ProjectLinkTitle = styled.h3`
  color: ${(props) => props.theme.colors.hotPink};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 24px;
  width: 100%;
`;
