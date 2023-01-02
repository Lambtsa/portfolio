import styled from "styled-components";

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

  a:hover {
    svg path {
      fill: ${(props) => props.theme.colors.redPurple};
    }
  }

  svg path {
    fill: ${(props) => props.theme.colors.hotPink};
  }
`;
