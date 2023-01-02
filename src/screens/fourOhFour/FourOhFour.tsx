import { Container } from "@components/Container";
import { Main } from "@components/Main";
import { FourOhFourContainer } from "./FourOhFour.styles";

export const FourOhFour = (): JSX.Element => {

  return (
    <>
      <Main>
        <Container alignment="center" size="mobile">
          <FourOhFourContainer>
            404
          </FourOhFourContainer>
        </Container>
      </Main>
    </>
  );
};
