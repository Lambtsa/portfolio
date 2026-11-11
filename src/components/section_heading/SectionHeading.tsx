import type { ReactElement, ReactNode } from "react";

interface SectionHeadingProps {
  /* "01", "02"…, shown above the title */
  index: string;
  title: string;
  /* A text-* class for the title colour */
  titleClassName: string;
  /* Shown on the right of the title (below it on phones) */
  aside?: ReactNode;
}

export const SectionHeading = ({
  index,
  title,
  titleClassName,
  aside,
}: SectionHeadingProps): ReactElement => {
  return (
    <div className="flex flex-wrap justify-between items-end gap-6 mb-10">
      <div>
        <p className="text-sm text-linen/50">{index} /</p>
        <h2 className={`mt-1.5 section-title ${titleClassName}`}>{title}</h2>
      </div>
      {aside}
    </div>
  );
};
