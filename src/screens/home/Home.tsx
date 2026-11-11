import type { ReactElement } from "react";

import { About } from "@/components/about";
import { Apps } from "@/components/apps";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Jumbotron } from "@/components/jumbotron";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Stats } from "@/components/stats";

export const HomeScreen = (): ReactElement => {
  return (
    <>
      <main className="flex-[1_1_100%] overflow-x-hidden min-w-full max-w-screen bg-eerie">
        <Header />
        <Jumbotron />
        <About />
        <Projects />
        <Stats />
        <Skills />
        <Experience />
        <Apps />
      </main>
      <Footer />
    </>
  );
};
