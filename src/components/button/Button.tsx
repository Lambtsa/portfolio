import Link from "next/link";
import type { ReactElement } from "react";

interface ButtonProps {
  content: string;
  href: string;
  /* primary: filled green; outline: linen border that fills green on hover */
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  /* Fades in after the hero title is typed (tablets and up) */
  isAppearing?: boolean;
}

const variants = {
  primary: "bg-caribbean text-eerie hover:bg-caribbean/85",
  outline: "border border-linen text-linen hover:bg-caribbean hover:border-caribbean hover:text-eerie",
};

const sizes = {
  sm: "min-h-10 px-4 rounded-[10px] text-[15px]",
  md: "min-h-[50px] px-[22px] rounded-xl text-[17px]",
  lg: "min-h-14 px-7 rounded-[14px] text-lg",
};

export const Button = ({
  content,
  href,
  variant = "outline",
  size = "md",
  isAppearing = false,
}: ButtonProps): ReactElement => {
  return (
    <Link
      href={href}
      className={`inline-flex justify-center items-center text-center leading-none no-underline transition-colors ${variants[variant]} ${sizes[size]} ${isAppearing ? "intro-appear" : ""}`}
    >
      {content}
    </Link>
  );
};
