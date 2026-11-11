"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useWindowScroll } from "react-use";

import Logo from "@/assets/logo.svg";
import { Button } from "@/components/button";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

export const Header = (): ReactElement => {
  const { y } = useWindowScroll();
  const { t } = useTranslation();
  const isScrolled = y !== 0;

  return (
    <header className={`fixed top-0 left-0 z-[1000] w-full h-[70px] intro-appear transition-colors ${isScrolled ? "bg-eerie/80" : "bg-transparent"}`}>
      <div className="flex justify-between items-center gap-4 h-full max-w-pc mx-auto p-4">
        <Image src={Logo} alt="Tom Lamb" priority />
        <Button
          href={URLS.EMAIL}
          content={t({
            id: "jumbotron.btn",
          })}
        />
      </div>
    </header>
  );
};
