import { CONTAINER } from "@constants/layout";
import styled from "styled-components";

export const AppsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.eerieBlack};
`;

export const AppsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 96px 16px;
  margin: 0 auto;
  max-width: ${CONTAINER.PC}px;
  gap: 16px;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    padding: 48px 16px;
    grid-template-columns: 1fr;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 8px;

  @media screen and (max-width: ${CONTAINER.TABLET}px) {
    text-align: center;
  }
`;

export const AppsTitle = styled.h2`
  color: ${(props) => props.theme.colors.linen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 48px;
  width: 100%;
`;

export const AppsText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
  width: 100%;
`;

export const AppsInnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
