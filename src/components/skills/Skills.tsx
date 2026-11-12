import type { ReactElement } from "react";

interface StackGroup {
  name: string;
  /* A text-* class for the group title */
  titleClassName: string;
  /* [technology, daily driver?] */
  items: [string, boolean?][];
}

const groups: StackGroup[] = [
  {
    name: "Backend & data",
    titleClassName: "text-caribbean",
    items: [["Java", true], ["PostgreSQL", true], ["Node.js", true], ["Kafka"], ["GraphQL", true], ["MongoDB"], ["Valkey"], ["Python"]],
  },
  {
    name: "Front end",
    titleClassName: "text-hot-pink",
    items: [["TypeScript", true], ["Next.js", true], ["React", true], ["Vue"], ["Tanstack", true], ["Svelte"], ["HTML & CSS"]],
  },
  {
    name: "Cloud & infra",
    titleClassName: "text-violet-400",
    items: [["Kubernetes", true], ["Docker", true], ["Helm"], ["Grafana"], ["Github actions", true], ["Loki"], ["CI/CD"]],
  },
  {
    name: "Product & design",
    titleClassName: "text-blue-400",
    items: [["Design Systems", true], ["User Research", true], ["Prototyping"], ["Technical Specs", true], ["Agile / Scrum", true], ["Product strategy"]]
  },
];

/* The "My stack" section: every technology as a tile, daily drivers marked in green */
export const Skills = (): ReactElement => {
  return (
    <section id="stack" className="max-w-pc mx-auto px-4 pb-[120px] max-md:pb-20 scroll-mt-24">
      <p className="text-sm text-linen/50">03 /</p>
      <div className="flex flex-wrap justify-between items-end gap-5 mt-1.5 mb-9">
        <h2 className="section-title text-bluetiful">My stack</h2>
        <p className="inline-flex items-center gap-2.5 text-[15px] text-linen/70">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-caribbean" />
          Daily drivers
        </p>
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-5">
        {groups.map((group) => (
          <div key={group.name} className="flex flex-col gap-5 p-7 rounded-[28px] border border-linen/10 bg-smoke">
            <h3 className={`text-lg ${group.titleClassName}`}>{group.name}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map(([tech, isDaily]) => (
                <li
                  key={tech}
                  className={`inline-flex items-center gap-2.5 min-h-[52px] px-4.5 rounded-[14px] border text-xl ${isDaily ? "border-caribbean/50 bg-caribbean/10 text-linen" : "border-linen/10 text-linen/85"}`}
                >
                  {isDaily && <span aria-hidden="true" className="size-2 rounded-full bg-caribbean" />}
                  {tech}
                  {isDaily && <span className="sr-only"> (daily driver)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
