"use client";

import Image from "next/image";
import type { ReactElement } from "react";

import TomImg from "@/assets/IMG_3377.png";
import { Button } from "@/components/button";
import { SocialIcons } from "@/components/social_icons";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

import { RotatingRole } from "./RotatingRole";

const roles = [
  "Tech lead",
  "Backend engineer",
  "Full-stack developer",
  "Product manager",
  "UI/UX designer",
];

export const Jumbotron = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section id="top" className="max-w-pc mx-auto px-4 pt-[120px] pb-5">
      <div className="flex flex-wrap gap-5">
        <div className="flex-[999_1_600px] min-w-0 flex flex-col justify-between gap-10 p-12 max-md:p-7 rounded-[28px] border border-linen/10 bg-smoke rise-in [--rise-delay:100ms]">
          <span className="self-start inline-flex items-center gap-2.5 min-h-[34px] px-3.5 rounded-full bg-caribbean/10 text-sm text-caribbean">
            <span aria-hidden="true" className="size-2 rounded-full bg-caribbean" />
            Paris, France
          </span>
          <div>
            <h1 className="text-[clamp(44px,6vw,80px)] leading-[1.05] font-normal text-linen">
              {t({
                id: "jumbotron.title",
              })}
            </h1>
            <RotatingRole roles={roles} />
            <p className="max-w-[640px] mt-6 text-xl leading-relaxed text-linen/70">
              {t({
                id: "jumbotron.subtitle",
              })}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href={URLS.EMAIL} content="hello@tom-lamb.com" />
            <SocialIcons />
          </div>
        </div>
        <div className="flex-[1_1_300px] flex flex-col gap-5">
          <Image
            src={TomImg}
            alt="Tom Lamb in a navy t-shirt and a flat cap"
            priority
            sizes="(min-width: 768px) 400px, 100vw"
            className="w-full h-[380px] object-cover object-top rounded-[28px] border border-linen/10 rise-in [--rise-delay:220ms]"
          />
          <div className="flex flex-col gap-1.5 px-7 py-6 rounded-[28px] border border-slate-blue/30 bg-slate-blue/10 rise-in [--rise-delay:340ms]">
            <span className="text-[13px] text-violet-300">Currently</span>
            <span className="text-lg leading-snug">Tech Lead &amp; Software Engineer at Decathlon Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
};
