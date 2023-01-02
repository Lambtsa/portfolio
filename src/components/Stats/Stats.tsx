import { useMemo } from "react";
import {
  StatContainer,
  StatsSection,
  StatsText,
  StatsTitle,
} from "./Stats.styles";
import { v4 as uuid } from "uuid";

export const Stats = (): JSX.Element => {
  const statistics = useMemo(
    () => [
      {
        title: "5+",
        subtitle: "Number of years experience in tech",
      },
      {
        title: "4",
        subtitle: "Number of Products I have launched",
      },
      {
        title: "3",
        subtitle: "Number of spoken languages",
      },
      {
        title: "6",
        subtitle: "Number of countries I have worked in",
      },
    ],
    []
  );

  const hasStats = !!statistics.length;

  return (
    <StatsSection>
      {hasStats &&
        statistics.map((stat) => (
          <StatContainer key={uuid()}>
            <StatsTitle>{stat.title}</StatsTitle>
            <StatsText>{stat.subtitle}</StatsText>
          </StatContainer>
        ))}
    </StatsSection>
  );
};
