import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import AudiolinxIcon from "@/assets/audiolinx.svg";
import { SectionHeading } from "@/components/section_heading";

interface Project {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  /* The "Under the hood" panel: one line per part of the stack */
  details: { title: string;
    text: string }[];
  icon: StaticImageData;
  url: string;
  host: string;
}

/* Live projects, each shown as a full-width card */
const projects: Project[] = [
  {
    name: "AudioLinx",
    tagline: "One link. Every streaming service.",
    description: "You’re on Spotify, your friends are on Apple Music, Deezer or YouTube. Search for a song or paste a link from any of them, and AudioLinx gives you one share page where everyone can listen on the app they already use.",
    features: [
      "Share pages with a playable preview that remember each listener’s usual service",
      "Privacy first: no accounts, no listening history, only anonymous daily totals",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Kysely", "Valkey", "Docker", "Tailwind", "Zod", "Grafana"],
    details: [
      {
        title: "Next.js + TypeScript",
        text: "App, share pages and API routes, validated end to end with Zod" 
      },
      {
        title: "PostgreSQL + Kysely",
        text: "Type-checked queries and timestamped migrations run on deploy" 
      },
      {
        title: "Tailwind",
        text: "Translate Figma designs directly into scalable, maintainable interfaces"
      },
      {
        title: "Docker, Grafana, Loki",
        text: "Self-hosted, monitored, with nightly backups and CI on every PR" 
      },
    ],
    icon: AudiolinxIcon,
    url: "https://audiolinx.xyz/",
    host: "audiolinx.xyz",
  },
];

/* Placeholders for projects on the way; remove one when its project goes live */
const upcoming = [
  {
    title: "Next project",
    description: "Launching in the coming days." 
  },
  {
    title: "More on the way",
    description: "New side projects are in the works." 
  },
];

export const Projects = (): ReactElement => {
  return (
    <section id="built" className="max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20 scroll-mt-24">
      <SectionHeading
        index="02"
        title="What I've built"
        titleClassName="text-slate-blue"
        aside={<p className="max-w-[420px] body-text">Side projects I design, build and run myself. More on the way.</p>}
      />
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-wrap gap-10 p-10 max-md:p-6 rounded-[28px] border border-slate-blue/35 bg-smoke no-underline transition-colors hover:border-slate-blue/70"
          >
            <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center size-[72px] rounded-[20px] bg-linen/5">
                  <Image src={project.icon} alt="" className="size-[52px]" />
                </div>
                <span className="inline-flex items-center gap-2 min-h-[30px] px-3 rounded-full bg-caribbean/10 text-[13px] text-caribbean">
                  <span aria-hidden="true" className="size-[7px] rounded-full bg-caribbean" />
                  Live
                </span>
              </div>
              <div>
                <h3 className="text-[40px] leading-tight text-linen">{project.name}</h3>
                <p className="mt-2.5 text-2xl text-slate-blue">{project.tagline}</p>
              </div>
              <p className="max-w-[640px] text-lg leading-relaxed text-linen/75">{project.description}</p>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-base leading-relaxed text-linen/75">
                    <span aria-hidden="true" className="text-caribbean">›</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <ul aria-label={"Built with"} className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="inline-flex items-center min-h-[30px] px-3 rounded-full border border-linen/10 text-[13px] text-linen/80">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-[1_1_280px] flex flex-col justify-between gap-6 p-7 rounded-[20px] bg-linen/[0.04]">
              <div className="flex flex-col gap-4.5">
                <p className="text-[13px] text-linen/50">Under the hood</p>
                {project.details.map((detail) => (
                  <div key={detail.title}>
                    <p className="text-base text-hot-pink">{detail.title}</p>
                    <p className="mt-1 text-sm leading-normal text-linen/65">{detail.text}</p>
                  </div>
                ))}
              </div>
              <span className="text-base text-hot-pink transition-colors group-hover:text-red-purple">Open {project.host} ↗</span>
            </div>
          </a>
        ))}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
          {upcoming.map((item) => (
            <div key={item.title} className="flex flex-col gap-3.5 min-h-[200px] p-8 rounded-[28px] border border-dashed border-linen/20">
              <span className="self-start inline-flex items-center min-h-7 px-3 rounded-full bg-linen/5 text-[13px] text-linen/70">Coming soon</span>
              <h3 className="text-2xl text-linen/85">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-linen/55">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
