import { CONTAINER } from "@constants/layout";
import styled from "styled-components";

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
  max-width: ${CONTAINER.PC}px;
  margin: 0 auto;
  height: 100vh;
  min-height: 100vh;
`;

export const JumbotronTitle = styled.h1`
  color: ${(props) => props.theme.colors.linen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
  max-width: ${CONTAINER.TABLET}px;
`;

export const JumbotronSubtitle = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  max-width: ${CONTAINER.TABLET}px;
`;
