import Image, { type StaticImageData } from "next/image";
import type { ReactElement } from "react";

import ProductManagementIcon from "@/assets/product_management.svg";
import WebDesignIcon from "@/assets/web_design.svg";
import WebDevelopmentIcon from "@/assets/web_development.svg";

interface Skill {
  name: string;
  description: string;
  icon: StaticImageData;
}

const skills: Skill[] = [
  {
    name: "Full Stack development",
    description: "From databases to websites like this one built in NextJS, I love building full stack applications in typescript where I can design the whole architecture and also a beautiful client side app.",
    icon: WebDevelopmentIcon,
  },
  {
    name: "Product Management",
    description: "By constantly optimising internal processes and ensuring we always have a big picture of the product and its objectives, I drive my teams by having a clear overview of all the moving pieces in order to maintain agility and productivity.",
    icon: ProductManagementIcon,
  },
  {
    name: "UX/UI and web design",
    description: "With a keen interest in human psychology and its effects on UX and a strong belief in user centered design, I push to implement clean and efficient design, based on a fine balance between intuition, innovation and user feedback.",
    icon: WebDesignIcon,
  },
];

export const Skills = (): ReactElement => {
  return (
    <section className="flex flex-col items-center h-full max-w-pc mx-auto py-24 max-xs:px-4 max-xs:py-12">
      <div className="flex flex-col justify-center items-center gap-4 max-w-tablet mb-4 text-center">
        <h2 className="section-title text-bluetiful">My Key Skills</h2>
        <p className="body-text">
          Through many years of experience in business management, product
          management and web development, I have developed key skills during my
          career.
        </p>
      </div>
      <div className="grid grid-cols-3 max-md:grid-cols-1 justify-center items-start gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col justify-center items-center gap-4 m-4 px-4 py-8 rounded-[20px] text-center">
            <Image src={skill.icon} alt="" />
            <h3 className="card-title text-hot-pink">{skill.name}</h3>
            <p className="body-text">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
