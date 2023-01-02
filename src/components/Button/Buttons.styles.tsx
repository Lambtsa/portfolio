import styled from "styled-components";

export const StyledButton = styled.button`
  text-align: center;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.linen};
  background-color: transparent;

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