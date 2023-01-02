import { CONTAINER } from "@constants/layout";
import styled from "styled-components";

export const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 16px;
  background-color: ${(props) => props.theme.colors.smokeBlack};

  @media screen and (max-width: ${CONTAINER.MOBILE}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  text-align: center;
`;

export const StatsTitle = styled.h3`
  color: ${(props) => props.theme.colors.caribbeanGreen};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 36px;
  line-height: 24px;
  width: 100%;
`;

export const StatsText = styled.p`
  color: ${(props) => props.theme.colors.linen70};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  font-size: 16px;
  line-height: 24px;
`;
