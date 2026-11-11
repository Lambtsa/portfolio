"use client";

import type { ReactElement } from "react";

import { Button } from "@/components/button";
import { SocialIcons } from "@/components/social_icons";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

export const Jumbotron = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="h-screen min-h-screen bg-eerie">
      <div className="relative flex flex-col justify-center items-center gap-4 h-screen min-h-screen max-w-pc mx-auto px-4">
        <h1 className="max-w-tablet text-center text-5xl leading-[48px] font-bold text-linen intro-typing">
          {t({
            id: "jumbotron.title",
          })}
        </h1>
        <p className="max-w-tablet text-center body-text intro-appear">
          {t({
            id: "jumbotron.subtitle",
          })}
        </p>
        <Button
          href={URLS.EMAIL}
          isAppearing
          content={t({
            id: "jumbotron.btn",
          })}
        />
        <SocialIcons />
      </div>
    </section>
  );
};
