import { CONTAINER } from "@constants/layout";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
  from{opacity: 0;}
  to{opacity: 100%;}
`;

export const SocialIconsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  @media screen and (min-width: ${CONTAINER.TABLET}px) {
    animation: ${appear} 2s ease-in 5s 1 normal both;
  }

  a:hover {
    svg path {
      fill: ${(props) => props.theme.colors.redPurple};
    }
  }

  svg path {
    fill: ${(props) => props.theme.colors.hotPink};
  }
`;
