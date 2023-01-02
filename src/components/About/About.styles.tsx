import { CONTAINER } from "@constants/layout";
import Image from "next/image";
import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: ${CONTAINER.PC}px;
`;

export const AboutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  gap: 16px;
`;

export const Img = styled(Image)``;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;

export const AboutTitle = styled.h2`
  color: ${(props) => props.theme.colors.caribbeanGreen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: left;
  font-size: 36px;
  line-height: 48px;
`;
export const AboutText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: left;
  font-size: 16px;
  line-height: 24px;
`;
