import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import DecathlonIcon from "@/assets/decathlon.svg";
import PortailIcon from "@/assets/portail-logo.svg";
import SaltLogo from "@/assets/saltlogo.svg";
import UbiquitiIcon from "@/assets/ui.svg";

interface Job {
  name: string;
  description: string;
  icon: StaticImageData;
  url: string;
  date: string;
}

const experience: Job[] = [
  {
    name: "Software Development Engineer",
    description: "For Decathlon Technology, I am currently working as part of the team responsible for delivering best-in-class apps, tools and services to our global supply chain. I work daily with React, VueJS, Typescript, Docker, Java and PostgreSQL.",
    icon: DecathlonIcon,
    url: "https://digital.decathlon.net/",
    date: "Apr 2023 - Present",
  },
  {
    name: "Full-stack Javascript Engineer",
    description: "For Ubiquiti, I worked as a full stack javascript engineer in the small team responsible for the in-house global e-commerce platform at Ubiquiti. I worked on a daily basis with PostgreSQL, Typescript, Graphql, NextJS, Apollo server and NodeJS.",
    icon: UbiquitiIcon,
    url: "https://ui.com/",
    date: "Aug 2021 - Apr 2023",
  },
  {
    name: "Full-stack Javascript Developer",
    description: "For Salt, I worked as a full stack javascript developer for Salt in Stockholm. From front ends in ReactJS to databases in Mongo DB, I brought all my experience of product management and UX/UI to all my new projects.",
    icon: SaltLogo,
    url: "https://www.salt.dev/",
    date: "Jan 2021 - Feb 2022",
  },
  {
    name: "Digital Product Manager",
    description: "As Product manager for Betao's User System/ invoicing tool, I was the bridge between the company's strategic vision and the two main products we created. I was responsible for identifying market needs and competitive opportunities while defining product strategies, feature roadmaps and enhancing customer experience.",
    icon: PortailIcon,
    url: "https://www.portail-autoentrepreneur.fr/",
    date: "Jan 2020 - Dec 2020",
  },
];

export const Experience = (): ReactElement => {
  return (
    <section className="bg-smoke">
      <div className="flex flex-col justify-center items-center h-full max-w-pc mx-auto py-24 max-xs:px-4 max-xs:py-12">
        <div className="flex flex-col justify-start items-center gap-4 max-w-tablet mb-4 text-center">
          <h2 className="section-title text-caribbean">Experience</h2>
          <p className="body-text">
            In a very eclectic career so far, I have worked in multiple countries from Ireland or Sweden to China. I was a Bartender for many years, worked in the startup eco-system in Stockholm as a Digital Product Manager and am now a FullStack Javascript Engineer.
          </p>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center items-start gap-4">
          {experience.map((job) => (
            <div key={job.name} className="flex justify-center items-start gap-4 px-4 py-8">
              <Image src={job.icon} alt="" className="min-w-[60px] mt-[5px]" />
              <div className="flex flex-col justify-center items-center gap-2 text-left">
                <h3 className="card-title text-hot-pink">{job.name}</h3>
                <p className="w-full text-base leading-6 text-linen/40">{job.date}</p>
                <p className="body-text">{job.description}</p>
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-left text-base leading-6 underline text-hot-pink"
                >
                  See company website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
