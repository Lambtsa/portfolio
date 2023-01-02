import styled from "styled-components";

export const FooterContainer = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.smokeBlack};
`;

export const FooterText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  text-align: center;
  font-size: 14px;
  line-height: 16px;
`;
