import type { ReactElement } from "react";

const statistics = [
  {
    title: "9+",
    subtitle: "years in tech",
  },
  {
    title: "4",
    subtitle: "products launched",
  },
  {
    title: "4",
    subtitle: "spoken languages",
  },
  {
    title: "6",
    subtitle: "countries worked in",
  },
];

export const Stats = (): ReactElement => {
  return (
    <section className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20">
      {statistics.map((stat) => (
        <div key={stat.subtitle} className="p-7 rounded-3xl border border-linen/10">
          <p className="text-5xl leading-none text-caribbean">{stat.title}</p>
          <p className="mt-3 text-[15px] text-linen/70">{stat.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
