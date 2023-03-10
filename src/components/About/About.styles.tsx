import { CONTAINER } from "@constants/layout";
import Image from "next/image";
import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.smokeBlack};
`;

export const Img = styled(Image)``;

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  margin: 0 auto;
  max-width: ${CONTAINER.PC}px;
  gap: 16px;

  @media screen and (max-width: ${CONTAINER.MOBILE}px) {
    padding: 48px 16px;
    ${Img} {
      display: none;
    }
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 8px;

  @media screen and (max-width: ${CONTAINER.MOBILE}px) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  color: ${(props) => props.theme.colors.caribbeanGreen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  width: 100%;
`;

export const AboutText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
`;
