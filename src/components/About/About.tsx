import Image from "next/image";
import type { ReactElement } from "react";

import TomImg from "@/assets/IMG_3377.webp";

const paragraphs = [
  "I am full stack Javascript developer and product manager who has worked in both LegalTech and Fintech within the Stockholm startup ecosystem.",
  "Driven by process with a keen eye on the big picture, I strive to constantly optimise my work and the work of the teams I am part of to fulfil product objectives.",
  "I am also a passionate skier, a skateboarder and when I am not outside in the wilderness, I spend my time developing websites and apps.",
];

export const About = (): ReactElement => {
  return (
    <section className="flex flex-col items-center max-w-full h-full bg-smoke">
      <div className="flex justify-center items-center gap-4 w-full max-w-pc mx-auto px-4 max-xs:py-12">
        <Image
          src={TomImg}
          alt="Tom Lamb in a dark t shirt and a flat cap"
          className="max-xs:hidden"
        />
        <div className="flex flex-col justify-center items-start gap-2 text-left max-xs:text-center">
          <h2 className="section-title text-caribbean">About Me</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="w-full body-text">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
