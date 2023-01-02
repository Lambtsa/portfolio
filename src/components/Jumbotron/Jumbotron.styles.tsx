import { CONTAINER } from "@constants/layout";
import styled, { keyframes } from "styled-components";

export const JumbotronContainer = styled.section`
  background-color: ${(props) => props.theme.colors.eerieBlack};
  height: 100vh;
  min-height: 100vh;
`;

export const JumbotronInnerContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 16px;
  max-width: ${CONTAINER.PC}px;
  margin: 0 auto;
  height: 100vh;
  min-height: 100vh;
`;

const animatedCursor = keyframes`
  from{border-right-color: #34D399;}
  to{border-right-color: transparent;}
`;

const animatedText = keyframes`
  from{width: 0;}
  to{width: 100%;}
`;

const appear = keyframes`
  from{opacity: 0;}
  to{opacity: 100%;}
`;

export const JumbotronTitle = styled.h1`
  color: ${(props) => props.theme.colors.linen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  max-width: ${CONTAINER.TABLET}px;

  border-right: solid 3px rgba(0, 255, 0, 0.75);
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;

  animation: ${animatedText} 5s steps(30, end) 2s 1 normal both,
    ${animatedCursor} 600ms steps(30, end) infinite;
`;

export const JumbotronSubtitle = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  max-width: ${CONTAINER.TABLET}px;
  animation: ${appear} 2s ease-in 5s 1 normal both;
`;
