import Image from "next/image";
import type { ReactElement } from "react";

import Figma from "@/assets/figma.svg";
import GraphQL from "@/assets/graphql.svg";
import Next from "@/assets/nextjs.svg";
import Node from "@/assets/nodejs.svg";
import Postgresql from "@/assets/postgreSQL.svg";
import Python from "@/assets/python.svg";
import Svelte from "@/assets/svelte.svg";
import Typescript from "@/assets/typescript.svg";

const technologies = [
  {
    name: "TypeScript",
    icon: Typescript,
  },
  {
    name: "Figma",
    icon: Figma,
  },
  {
    name: "Next.js",
    icon: Next,
  },
  {
    name: "GraphQL",
    icon: GraphQL,
  },
  {
    name: "Node.js",
    icon: Node,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Svelte",
    icon: Svelte,
  },
  {
    name: "PostgreSQL",
    icon: Postgresql,
  },
];

export const Apps = (): ReactElement => {
  return (
    <section className="flex flex-col items-center max-w-full h-full bg-eerie">
      <div className="grid grid-cols-[2fr_3fr] max-md:grid-cols-1 justify-center items-center gap-4 w-full max-w-pc mx-auto px-4 py-24 max-md:py-12">
        <div className="flex flex-col justify-center items-start gap-2 text-left max-md:text-center">
          <h2 className="section-title text-linen">My tech stack</h2>
          <p className="w-full body-text">
            Here are some of the technologies, languages or applications that I
            work with on a daily basis.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-2">
          {technologies.map((tech) => (
            <Image key={tech.name} src={tech.icon} alt={tech.name} title={tech.name} />
          ))}
        </div>
      </div>
    </section>
  );
};
