import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import AudiolinxIcon from "@/assets/audiolinx.svg";
import CharliesCloset from "@/assets/charlie.svg";
import CopainsMauiIcon from "@/assets/copains_maui.svg";
import { SectionHeading } from "@/components/section_heading";

interface Project {
  name: string;
  status: "live" | "pre-launch" | "upcoming"
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  icon: StaticImageData;
  url: string;
  host: string;
  /* Optional tip link shown in a strip at the bottom of the card */
  support?: {
    message: string;
    label: string;
    url: string;
  };
}

/* Live projects, each shown as a full-width card */
const projects: Project[] = [
  {
    name: "AudioLinx",
    status: "live",
    tagline: "One link. Every streaming service.",
    description: "You’re on Spotify, your friends are on Apple Music, Deezer or YouTube. Search for a song or paste a link from any of them, and AudioLinx gives you one share page where everyone can listen on the app they already use.",
    features: [
      "Share pages with a playable preview that remember each listener’s usual service",
      "Privacy first: no accounts, no listening history, only anonymous daily totals",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Kysely", "Valkey", "Docker", "Tailwind", "Zod", "Grafana"],
    icon: AudiolinxIcon,
    url: "https://audiolinx.xyz/",
    host: "audiolinx.xyz",
    support: {
      message: "AudioLinx is free and ad-free. If it’s saved you a “what app are you on?”, a coffee keeps the servers running.",
      label: "Support on Ko-fi",
      url: "https://ko-fi.com/audiolinx",
    },
  },
  {
    name: "Les copains de Maui",
    status: "live",
    tagline: "Dog boarding and a holiday cottage in Alsace.",
    description: "The website for a family-run dog boarding kennel and gîte surrounded by nature. Owners can see how their dogs will be looked after, check prices and conditions, and send a booking request for the cottage in a few clicks.",
    features: [
      "Available in French, English and German",
      "Gîte booking requests sent straight to the owners’ inbox, with an interactive map to find the place",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "react-intl", "React Hook Form", "Zod", "Mapbox", "Docker"],
    icon: CopainsMauiIcon,
    url: "https://lescopainsdemaui.com/",
    host: "lescopainsdemaui.com",
  },
  {
    name: "Charlie's Closet",
    status: "pre-launch",
    tagline: "Kids' clothes that get passed from hand to hand.",
    description:
      "The website for a Strasbourg-based subscription service that rents out children's clothing by the month. When a piece is outgrown or worn out, families send it back, and it's repaired and passed on to another child. Parents can join the waitlist for the launch.",
    features: [
      "Waitlist sign-up form that goes straight to the founders' inbox",
      "Explains the circular model: swaps within 48 hours, visible patch repairs and recycling of pieces that can't be saved",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind", "React Hook Form", "Zod", "Docker"],
    icon: CharliesCloset,
    url: "https://charlies-closet.com",
    host: "charlies-closet.com",
  },
];

const StatusTag = (status: Project["status"]) => {
  switch (status) {
    case "live": {
      return (
        <span className="inline-flex items-center gap-2 min-h-[30px] px-3 rounded-full bg-emerald-500/10 text-[13px] text-emerald-500">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-emerald-500" />
          Live
        </span>
      );
    }
    case "upcoming": {
      return (
        <span className="inline-flex items-center gap-2 min-h-[30px] px-3 rounded-full bg-indigo-500/10 text-[13px] text-indigo-500">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-indigo-500" />
          Upcoming
        </span>
      );
    }
    case "pre-launch": {
      return (
        <span className="inline-flex items-center gap-2 min-h-[30px] px-3 rounded-full bg-amber-500/10 text-[13px] text-amber-500">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-amber-500" />
          Pre-launch
        </span>
      );
    }
    default: {
      return (
        <span className="inline-flex items-center gap-2 min-h-[30px] px-3 rounded-full bg-indigo-500/10 text-[13px] text-indigo-500">
          <span aria-hidden="true" className="size-[7px] rounded-full bg-indigo-500" />
          Upcoming
        </span>
      );
    }
  }
};

/* Placeholders for projects on the way; remove one when its project goes live */
const upcoming = [
  {
    title: "More on the way",
    description: "New side projects are in the works." 
  },
];

export const Projects = (): ReactElement => {
  return (
    <section id="built" className="max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20 scroll-mt-24">
      <SectionHeading
        index="01"
        title="What I've built"
        titleClassName="text-slate-blue"
        aside={<p className="max-w-[420px] body-text">Side projects I design, build and run myself. More on the way.</p>}
      />
      <div className="flex flex-col gap-5">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col p-10 max-md:p-6 rounded-[28px] border border-slate-blue/35 bg-smoke transition-colors hover:border-slate-blue/70"
          >
            <div className="min-w-0 flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center items-center size-[72px] rounded-[20px] bg-linen/5">
                    <Image src={project.icon} alt="" className="size-[52px]" />
                  </div>
                  {StatusTag(project.status)}
                </div>
                {/* Stretched link: its ::after covers the card so the whole card stays clickable */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base text-hot-pink no-underline transition-colors group-hover:text-red-purple after:absolute after:inset-0 after:rounded-[28px] after:content-['']"
                >
                  Open {project.host} ↗
                </a>
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
            {project.support && (
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 mt-6 pt-6 border-t border-dashed border-linen/15">
                <p className="max-w-[560px] text-sm leading-relaxed text-linen/60">{project.support.message}</p>
                <a
                  href={project.support.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-2.5 min-h-11 px-[18px] rounded-xl border-[1.5px] border-kofi text-[15px] text-kofi no-underline transition-colors hover:bg-kofi/10"
                >
                  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h13v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8z" />
                    <path d="M16 10h2a3 3 0 0 1 0 6h-2" />
                    <path d="M9.5 15.5c-1.5-1-2.5-2-2.5-3a1.25 1.25 0 0 1 2.5-.5 1.25 1.25 0 0 1 2.5.5c0 1-1 2-2.5 3z" />
                  </svg>
                  {project.support.label}
                </a>
              </div>
            )}
          </article>
        ))}
        <div className="grid grid-cols-1 gap-5">
          {upcoming.map((item) => (
            <div key={item.title} className="flex flex-col gap-3.5 p-8 rounded-[28px] border border-dashed border-linen/20">
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
