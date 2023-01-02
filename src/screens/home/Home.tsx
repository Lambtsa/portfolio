import { About } from "@components/About";
import { Header } from "@components/Header";
import { Jumbotron } from "@components/Jumbotron";
import { Main } from "@components/Main";

export const HomeScreen = (): JSX.Element => {

  /* ################################################## */
  /* State */
  /* ################################################## */
  
  return (
    <Main>
      <Header />
      <Jumbotron />
      <About />
    </Main>
  )
};
