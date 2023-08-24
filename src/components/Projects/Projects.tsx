import { FC, SVGProps, useMemo } from "react";
import {
  ProjectLink,
  ProjectLinkTitle,
  ProjectsContainer,
  ProjectsSection,
  ProjectsText,
  ProjectsTitle,
  ProjectsTitleContainer,
} from "./Projects.styles";
import { v4 as uuid } from "uuid";
import { ReactComponent as UbiquitiIcon } from "@assets/ubiquiti.svg";
import { ReactComponent as AudiolinxIcon } from "@assets/audiolinx.svg";
import { ReactComponent as CharlieIcon } from "@assets/charlie.svg";
import { ReactComponent as SmokeyIcon } from "@assets/smokey_monkey.svg";

interface ProjectApps {
  name: string;
  description: string;
  icon: FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>;
  url: string;
}

export const Projects = (): JSX.Element => {
  const apps: ProjectApps[] = useMemo(
    () => [
      {
        name: "AudioLinx",
        description:
          "A cute little app where you enter an artist, a song title or a url and it will generate urls for that song for the most popular streaming services. Built with Nextjs, typescript and styled components using an Express RESTApi.",
        icon: AudiolinxIcon,
        url: "https://audiolinx.xyz/",
      },
      {
        name: "The Smokey Monkey",
        description:
          "The Smokey Monkey is a BBQ SmokeHouse in Strasbourg owned by former colleagues of mine from a past life as a Bartender. They wanted an online presence to be able to show their brand, take reservations and give their customers more information about why they decided to open their amazing smokehouse.",
        icon: SmokeyIcon,
        url: "https://smokey-monkey.com/",
      },
      {
        name: "Charlie's Closet",
        description:
          "An app for parents in France to be able to rent second hand baby clothes during the first months of their babies lives. This circular economy app is built in ReactJS, Typescript on the client side and ExpressJS, MongoDB and Typescript on the server side.",
        icon: CharlieIcon,
        url: "https://charlies-closet.com/",
      },
      {
        name: "Reminders App",
        description:
          "A Reminders app allowing users to add, edit and collaborate on tasks in realtime. Built with ReactJS, Typescript, Socket.io and Beautiful dnd on the client side and ExpressJS, Typescript, Socket.io and MongoDB on the server side.",
        icon: UbiquitiIcon,
        url: "https://ui-tasks.netlify.app/",
      },
    ],
    []
  );

  const hasApps = !!apps.length;

  return (
    <ProjectsSection>
      <ProjectsTitleContainer>
        <ProjectsTitle>My projects</ProjectsTitle>
        <ProjectsText>
          Here are just a few of the apps I have worked on recently.
        </ProjectsText>
      </ProjectsTitleContainer>
      <ProjectsContainer>
        {hasApps &&
          apps.map((app) => (
            <ProjectLink
              key={`${uuid()}-${app.name}`}
              href={app.url}
              target="_blank"
              rel="noreferrer"
            >
              <app.icon />
              <ProjectLinkTitle>{app.name}</ProjectLinkTitle>
              <ProjectsText>{app.description}</ProjectsText>
            </ProjectLink>
          ))}
      </ProjectsContainer>
    </ProjectsSection>
  );
};
