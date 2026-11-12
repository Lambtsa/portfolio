"use client";

import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className="flex flex-wrap justify-between gap-4 w-full max-w-pc mx-auto px-4 pt-4 pb-10 text-sm text-linen/60">
      <p>
        {t({
          id: "footer.copyright",
        }, {
          date: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
};
