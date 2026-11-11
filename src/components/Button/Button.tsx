import Link from "next/link";
import type { ReactElement } from "react";

interface ButtonProps {
  content: string;
  href: string;
  /* Fades in after the hero title is typed (tablets and up) */
  isAppearing?: boolean;
}

export const Button = ({
  content,
  href,
  isAppearing = false,
}: ButtonProps): ReactElement => {
  return (
    <Link
      href={href}
      className={`text-center text-base font-bold leading-none px-4 py-2 rounded-lg border border-linen text-linen no-underline transition-colors hover:bg-caribbean hover:border-caribbean hover:text-eerie ${isAppearing ? "intro-appear" : ""}`}
    >
      {content}
    </Link>
  );
};
