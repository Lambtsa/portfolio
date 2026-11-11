import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import DecathlonIcon from "@/assets/decathlon.svg";
import PortailIcon from "@/assets/portail-logo.svg";
import SaltLogo from "@/assets/saltlogo.svg";
import UbiquitiIcon from "@/assets/ui.svg";
import { SectionHeading } from "@/components/section_heading";
import { URLS } from "@/constants/url";

interface Role {
  title: string;
  dates: string;
}

interface Job {
  company: string;
  location: string;
  /* No icon or url for the years before tech */
  icon?: StaticImageData;
  url?: string;
  roles: Role[];
  summary: string;
  highlights: string[];
  tech: string[];
}

const hats = [
  "Tech lead",
  "Full-stack developer",
  "Backend engineer",
  "Product / project manager",
  "UI/UX designer",
];

const jobs: Job[] = [
  {
    company: "Decathlon Technology",
    location: "Paris, France",
    icon: DecathlonIcon,
    url: "https://digital.decathlon.net/",
    roles: [{
      title: "Tech Lead & Software Engineer",
      dates: "Apr 2023 – Present" 
    }],
    summary: "At Decathlon Digital I use my product management background to align stakeholder vision with technical execution, building data applications that optimise supply chain operations.",
    highlights: [
      "Manage cross-functional teams delivering high-quality, testable and maintainable software that solves real business problems at scale",
      "Design robust data applications that power strategic, data-driven decisions across the value chain",
      "Combine product intuition with hands-on depth in Kubernetes, Java and the JavaScript ecosystem",
    ],
    tech: ["Java", "Kafka", "Kubernetes", "Docker", "React", "Vue", "TypeScript", "PostgreSQL"],
  },
  {
    company: "Ubiquiti",
    location: "Stockholm, Sweden",
    icon: UbiquitiIcon,
    url: "https://ui.com/",
    roles: [{
      title: "Full Stack JavaScript Engineer",
      dates: "Aug 2021 – Mar 2023" 
    }],
    summary: "Part of a lean, agile team trusted with building and scaling Ubiquiti’s in-house global e-commerce platform.",
    highlights: [
      "Delivered high-performance, seamless user experiences on a global storefront",
      "Maintained rigorous data and API integrity at global scale",
    ],
    tech: ["TypeScript", "Next.js", "GraphQL", "Apollo Server", "Node.js", "PostgreSQL"],
  },
  {
    company: "Salt",
    location: "Stockholm, Sweden",
    icon: SaltLogo,
    url: "https://www.salt.dev/",
    roles: [{
      title: "Full Stack JavaScript Engineer · Consultant",
      dates: "Jan 2021 – Mar 2022" 
    }],
    summary: "Full-stack JavaScript consultant embedded in client teams, using my product and UX/UI background to deliver adaptable engineering solutions.",
    highlights: [
      "Acted as a cross-functional force within client teams, not just writing clean full-stack code",
      "Made sure technical architecture served user experience and product strategy",
    ],
    tech: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
  },
  {
    company: "Betao AB",
    location: "Stockholm, Sweden",
    icon: PortailIcon,
    url: "https://www.portail-autoentrepreneur.fr/",
    roles: [{
      title: "Senior Product Manager",
      dates: "Jun 2017 – Dec 2020" 
    }],
    summary: "The bridge between corporate strategy and technical execution for the company’s two primary products, owning the product vision.",
    highlights: [
      "Identified market needs and competitive advantages to shape strategic roadmaps",
      "Turned complex customer pain points into high-impact product features",
      "Blended business intent with user-centric design to raise the overall experience",
    ],
    tech: ["Product strategy", "Roadmapping", "Customer experience"],
  },
  {
    company: "Before tech",
    location: "Ireland · Sweden · China",
    roles: [{
      title: "Bartender",
      dates: "Before 2017" 
    }],
    summary: "Many years as a bartender across several countries before moving into tech.",
    highlights: [],
    tech: ["Hospitality"],
  },
];

export const Experience = (): ReactElement => {
  return (
    <section id="experience" className="max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20 scroll-mt-24">
      <SectionHeading
        index="01"
        title="Experience"
        titleClassName="text-caribbean"
        aside={(
          <p className="max-w-[520px] body-text">
            Across supply chain logistics, e-commerce, Fintech and LegalTech: from product management in Stockholm to leading engineering teams in Paris.
          </p>
        )}
      />
      <ul aria-label="Roles I have held" className="flex flex-wrap gap-2.5 mb-10">
        <li className="inline-flex items-center min-h-[34px] px-3.5 rounded-full bg-caribbean/10 text-sm text-caribbean">Hats I&apos;ve worn</li>
        {hats.map((hat) => (
          <li key={hat} className="inline-flex items-center min-h-[34px] px-3.5 rounded-full border border-linen/15 text-sm text-linen/85">
            {hat}
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-5">
        {jobs.map((job) => (
          <article key={job.company} className="flex flex-wrap gap-7 p-8 max-md:p-6 rounded-[28px] border border-linen/10 bg-smoke">
            <div className="flex-[1_1_260px] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="flex-none flex justify-center items-center size-[60px] rounded-2xl bg-linen/5">
                  {job.icon ? (
                    <Image src={job.icon} alt="" className="max-w-[42px] max-h-[42px]" />
                  ) : (
                    <span aria-hidden="true" className="text-xl text-hot-pink">··</span>
                  )}
                </div>
                <div>
                  <h3 className="card-title text-linen">{job.company}</h3>
                  <p className="mt-1 text-sm text-linen/55">{job.location}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 mt-1 pl-3.5 border-l-2 border-hot-pink/35">
                {job.roles.map((role) => (
                  <div key={role.title}>
                    <p className="text-[17px] text-hot-pink">{role.title}</p>
                    <p className="mt-0.5 text-sm text-linen/55">{role.dates}</p>
                  </div>
                ))}
              </div>
              {job.url && (
                <a href={job.url} target="_blank" rel="noreferrer" className="self-start text-[15px] text-hot-pink transition-colors hover:text-red-purple">
                  Company website ↗
                </a>
              )}
            </div>
            <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-4">
              <p className="text-[17px] leading-relaxed text-linen/80">{job.summary}</p>
              {job.highlights.length > 0 && (
                <ul className="flex flex-col gap-2.5">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-[15px] leading-relaxed text-linen/70">
                      <span aria-hidden="true" className="text-caribbean">›</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
              <ul aria-label={`Tech used at ${job.company}`} className="flex flex-wrap gap-2 mt-auto pt-2">
                {job.tech.map((tech) => (
                  <li key={tech} className="inline-flex items-center min-h-7 px-3 rounded-full bg-slate-blue/15 text-[13px] text-violet-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <a href={URLS.LINKEDIN} target="_blank" rel="noreferrer" className="inline-flex items-center min-h-11 mt-6 text-base text-hot-pink transition-colors hover:text-red-purple">
        Full history on LinkedIn ↗
      </a>
    </section>
  );
};
