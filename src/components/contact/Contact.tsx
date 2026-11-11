"use client";

import type { ReactElement } from "react";

import { Button } from "@/components/button";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

export const Contact = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section className="max-w-pc mx-auto px-4 pb-8">
      <div className="flex flex-wrap justify-between items-center gap-8 px-12 py-14 max-md:px-7 max-md:py-10 rounded-[28px] border border-caribbean/30 bg-smoke">
        <div>
          <h2 className="text-[clamp(32px,4.5vw,52px)] leading-tight">Let&apos;s build something.</h2>
          <p className="mt-3 text-lg text-linen/70">Open to new projects, roles and good conversations.</p>
        </div>
        <Button
          href={URLS.EMAIL}
          variant="primary"
          size="lg"
          content={t({
            id: "jumbotron.btn",
          })}
        />
      </div>
    </section>
  );
};
