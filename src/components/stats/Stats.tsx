import type { ReactElement } from "react";

const statistics = [
  {
    title: "5+",
    subtitle: "Number of years experience in tech",
  },
  {
    title: "4",
    subtitle: "Number of Products I have launched",
  },
  {
    title: "3",
    subtitle: "Number of spoken languages",
  },
  {
    title: "6",
    subtitle: "Number of countries I have worked in",
  },
];

export const Stats = (): ReactElement => {
  return (
    <section className="grid grid-cols-4 max-xs:grid-cols-2 justify-center items-start gap-8 px-4 py-12 bg-smoke">
      {statistics.map((stat) => (
        <div key={stat.subtitle} className="flex flex-col justify-start items-center gap-4 text-center">
          <h3 className="w-full text-4xl leading-6 font-bold text-caribbean">{stat.title}</h3>
          <p className="body-text">{stat.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
