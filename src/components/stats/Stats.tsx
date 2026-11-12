import type { ReactElement } from "react";

import { CountUp } from "./CountUp";

const statistics = [
  {
    title: "9+",
    subtitle: "years in tech",
  },
  {
    title: "6",
    subtitle: "countries",
  },
  {
    title: "250k+",
    subtitle: "active users impacted",
  },
  {
    title: "10+",
    subtitle: "0-to-1 products shipped",
  },
];

export const Stats = (): ReactElement => {
  return (
    <section className="grid grid-cols-4 max-md:grid-cols-2 gap-5 max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20">
      {statistics.map((stat, index) => (
        <div
          key={stat.subtitle}
          className="p-7 rounded-3xl border border-linen/10 rise-in"
          style={{
            animationDelay: `${460 + index * 80}ms` 
          }}
        >
          <CountUp value={stat.title} />
          <p className="mt-3 text-[15px] text-linen/70">{stat.subtitle}</p>
        </div>
      ))}
    </section>
  );
};
