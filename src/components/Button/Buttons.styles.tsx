import { CONTAINER } from "@constants/layout";
import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from{opacity: 0;}
  to{opacity: 100%;}
`;

export const StyledButton = styled.button<{
  isAppearing: boolean;
}>`
  text-align: center;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.linen};
  background-color: transparent;

  @media screen and (min-width: ${CONTAINER.TABLET}px) {
    ${(props) =>
      props.isAppearing &&
      css`
        animation: ${appear} 2s ease-in 5s 1 normal both;
      `}
  }

  :hover {
    background-color: ${(props) => props.theme.colors.caribbeanGreen};
    color: ${(props) => props.theme.colors.eerieBlack};
    border: 1px solid ${(props) => props.theme.colors.caribbeanGreen};
    > a {
      color: ${(props) => props.theme.colors.eerieBlack};
    }
  }

  > a {
    color: ${(props) => props.theme.colors.linen};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    text-decoration: none;
  }
`;
