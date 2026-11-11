"use client";

import type { ReactElement } from "react";

import { useTranslation } from "@/hooks/useTranslation";

export const Footer = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <footer className="flex justify-center items-center min-w-full p-4 bg-smoke">
      <p className="text-center text-sm leading-4 text-linen/70">
        {t({
          id: "footer.copyright",
        }, {
          date: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
};
