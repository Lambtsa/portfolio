import { WrapSize } from "@components/Container/Container.types";
import { CONTAINER } from "@constants/layout";
import styled, { css, keyframes } from "styled-components";

const appear = keyframes`
  from{opacity: 0;}
  to{opacity: 100%;}
`;

export const HeaderContainer = styled.div<{
  isScrolled: boolean;
}>`
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) =>
    props.isScrolled ? props.theme.colors.eerieBlack80 : "transparent"};
  animation: ${appear} 2s ease-in 5s 1 normal both;
`;

export const InnerContainer = styled.div<{
  size: WrapSize;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 16px;
  height: 100%;
  margin: 0 auto;
  ${({ size }) => {
    switch (size) {
      case "mobile":
        return css`
          max-width: ${CONTAINER.MOBILE}px;
        `;
      case "tablet":
        return css`
          max-width: ${CONTAINER.TABLET}px;
        `;
      case "pc":
        return css`
          max-width: ${CONTAINER.PC}px;
        `;
      case "tv":
      case "full":
        return css`
          max-width: ${CONTAINER.TV}px;
        `;
    }
  }};
`;
