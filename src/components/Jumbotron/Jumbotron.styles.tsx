import styled from "styled-components";

export const JumbotronContainer = styled.section`
  height: 100vh;
  min-height: 100vh;
`;

export const JumbotronTitle = styled.h1`
  color: ${(props) => props.theme.colors.linen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
  font-size: 48px;
  line-height: 48px;
`;

export const JumbotronSubtitle = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`;