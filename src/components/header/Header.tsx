"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useWindowScroll } from "react-use";

import Logo from "@/assets/logo.svg";
import { Button } from "@/components/button";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

const links = [
  {
    href: "#experience",
    label: "Experience" 
  },
  {
    href: "#built",
    label: "What I've built" 
  },
  {
    href: "#stack",
    label: "Stack" 
  },
];

export const Header = (): ReactElement => {
  const { y } = useWindowScroll();
  const { t } = useTranslation();
  const isScrolled = y !== 0;

  return (
    <header className={`fixed top-0 left-0 z-[1000] w-full intro-appear transition-colors ${isScrolled ? "bg-eerie/80 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="flex justify-between items-center gap-4 max-w-pc mx-auto p-4">
        <a href="#top" className="flex items-center gap-3 text-lg text-linen no-underline">
          <Image src={Logo} alt="" priority className="size-10" />
          tom-lamb
        </a>
        <nav aria-label="Sections" className="flex items-center gap-1.5 p-1.5 rounded-[14px] border border-linen/10 bg-linen/[0.03] text-[15px]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center min-h-10 px-3.5 rounded-[10px] text-linen/75 no-underline transition-colors hover:bg-linen/5 hover:text-linen max-md:hidden"
            >
              {link.label}
            </a>
          ))}
          <Button
            href={URLS.EMAIL}
            variant="primary"
            size="sm"
            content={t({
              id: "jumbotron.btn",
            })}
          />
        </nav>
      </div>
    </header>
  );
};
