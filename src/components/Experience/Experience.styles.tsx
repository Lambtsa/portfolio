import { CONTAINER } from "@constants/layout";
import Link from "next/link";
import styled from "styled-components";

export const ExperienceSection = styled.section`
  background-color: ${(props) => props.theme.colors.smokeBlack};
`;

export const ExperienceOuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 96px 0;
  max-width: ${CONTAINER.PC}px;
  background-color: ${(props) => props.theme.colors.smokeBlack};

  @media screen and (max-width: ${CONTAINER.MOBILE}px) {
    padding: 48px 16px;
  }
`;

export const ExperienceTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  max-width: ${CONTAINER.TABLET}px;
`;

export const ExperienceTitle = styled.h2`
  color: ${(props) => props.theme.colors.caribbeanGreen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  width: 100%;
`;

export const ExperienceText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
`;

export const ExperienceCaption = styled.p`
  color: ${(props) => props.theme.colors.linen40};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
`;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    grid-template-columns: 1fr;
  }
`;

export const ExperienceInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  padding: 32px 16px;

  svg {
    min-width: fit-content;
    margin-top: 5px;
  }
`;

export const ExperienceTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  text-align: left;
`;

export const ExperienceLinkTitle = styled.h3`
  color: ${(props) => props.theme.colors.hotPink};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 20px;
  line-height: 24px;
  width: 100%;
`;

export const ExperienceLink = styled(Link)`
  text-decoration: underline;
  color: ${(props) => props.theme.colors.hotPink};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  text-align: left;
  width: 100%;
  line-height: 24px;
`;
