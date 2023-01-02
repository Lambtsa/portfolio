import { Button } from "@components/Button";
import { Main } from "@components/Main";
import { routes } from "@helpers/routes";
import {
  FourOhFourContainer,
  FourOhFourSubtitle,
  FourOhFourTitle,
} from "./FourOhFour.styles";

export const FourOhFour = (): JSX.Element => {
  return (
    <>
      <Main>
        <FourOhFourContainer>
          <FourOhFourTitle>{"404"}</FourOhFourTitle>
          <FourOhFourSubtitle>
            {"Oups! Looks like this page doesn't exist just yet."}
          </FourOhFourSubtitle>
          <Button href={routes.index()} content="Return to Home" />
        </FourOhFourContainer>
      </Main>
    </>
  );
};
