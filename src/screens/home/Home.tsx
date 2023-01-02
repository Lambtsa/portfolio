import { About } from "@components/About";
import { Apps } from "@components/Apps";
import { Experience } from "@components/Experience";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Jumbotron } from "@components/Jumbotron";
import { Main } from "@components/Main";
import { Projects } from "@components/Projects";
import { Skills } from "@components/Skills";
import { Stats } from "@components/Stats";

export const HomeScreen = (): JSX.Element => {
  /* ################################################## */
  /* State */
  /* ################################################## */

  return (
    <>
      <Main>
        <Header />
        <Jumbotron />
        <About />
        <Projects />
        <Stats />
        <Skills />
        <Experience />
        <Apps />
      </Main>
      <Footer />
    </>
  );
};
