import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import AudiolinxIcon from "@/assets/audiolinx.svg";
import CharlieIcon from "@/assets/charlie.svg";
import SmokeyIcon from "@/assets/smokey_monkey.svg";
import UbiquitiIcon from "@/assets/ubiquiti.svg";

interface ProjectApp {
  name: string;
  description: string;
  icon: StaticImageData;
  url: string;
}

const apps: ProjectApp[] = [
  {
    name: "AudioLinx",
    description: "A cute little app where you enter an artist, a song title or a url and it will generate urls for that song for the most popular streaming services. Built with Nextjs, typescript and styled components using an Express RESTApi.",
    icon: AudiolinxIcon,
    url: "https://audiolinx.xyz/",
  },
  {
    name: "The Smokey Monkey",
    description: "The Smokey Monkey is a BBQ SmokeHouse in Strasbourg owned by former colleagues of mine from a past life as a Bartender. They wanted an online presence to be able to show their brand, take reservations and give their customers more information about why they decided to open their amazing smokehouse.",
    icon: SmokeyIcon,
    url: "https://smokey-monkey.com/",
  },
  {
    name: "Charlie's Closet",
    description: "An app for parents in France to be able to rent second hand baby clothes during the first months of their babies lives. This circular economy app is built in ReactJS, Typescript on the client side and ExpressJS, MongoDB and Typescript on the server side.",
    icon: CharlieIcon,
    url: "https://charlies-closet.com/",
  },
  {
    name: "Reminders App",
    description: "A Reminders app allowing users to add, edit and collaborate on tasks in realtime. Built with ReactJS, Typescript, Socket.io and Beautiful dnd on the client side and ExpressJS, Typescript, Socket.io and MongoDB on the server side.",
    icon: UbiquitiIcon,
    url: "https://ui-tasks.netlify.app/",
  },
];

export const Projects = (): ReactElement => {
  return (
    <section className="flex flex-col items-center h-full max-w-pc mx-auto py-24 max-md:px-4 max-md:py-12">
      <div className="flex flex-col justify-center items-center gap-4 mb-4 text-center">
        <h2 className="section-title text-slate-blue">My projects</h2>
        <p className="body-text">Here are just a few of the apps I have worked on recently.</p>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center gap-4 h-fit">
        {apps.map((app) => (
          <a
            key={app.name}
            href={app.url}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col justify-start items-center gap-4 h-full m-4 px-4 py-8 rounded-[20px] no-underline text-center transition-colors hover:bg-linen/20"
          >
            <Image src={app.icon} alt="" />
            <h3 className="card-title text-linen">{app.name}</h3>
            <p className="body-text">{app.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};
