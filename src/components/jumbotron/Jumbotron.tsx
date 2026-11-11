"use client";

import Image from "next/image";
import type { CSSProperties, ReactElement } from "react";

import TomImg from "@/assets/IMG_3377.webp";
import { Button } from "@/components/button";
import { SocialIcons } from "@/components/social_icons";
import { URLS } from "@/constants/url";
import { useTranslation } from "@/hooks/useTranslation";

export const Jumbotron = (): ReactElement => {
  const { t } = useTranslation();
  const title = t({
    id: "jumbotron.title",
  });

  return (
    <section id="top" className="max-w-pc mx-auto px-4 pt-[120px] pb-5">
      <div className="flex flex-wrap gap-5">
        <div className="flex-[999_1_600px] min-w-0 flex flex-col justify-between gap-10 p-12 max-md:p-7 rounded-[28px] border border-linen/10 bg-smoke">
          <span className="self-start inline-flex items-center gap-2.5 min-h-[34px] px-3.5 rounded-full bg-caribbean/10 text-sm text-caribbean">
            <span aria-hidden="true" className="size-2 rounded-full bg-caribbean" />
            Paris, France
          </span>
          <div>
            <h1
              className="text-[clamp(44px,6vw,80px)] leading-[1.05] font-normal text-linen intro-typing"
              style={{
                "--typing-chars": title.length 
              } as CSSProperties}
            >
              {title}
            </h1>
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
            alt="Tom Lamb in a dark t-shirt and a flat cap"
            priority
            sizes="(min-width: 768px) 400px, 100vw"
            className="w-full h-[380px] object-cover object-top rounded-[28px] border border-linen/10"
          />
          <div className="flex flex-col gap-1.5 px-7 py-6 rounded-[28px] border border-slate-blue/30 bg-slate-blue/10">
            <span className="text-[13px] text-violet-300">Currently</span>
            <span className="text-lg leading-snug">Tech Lead &amp; Software Engineer at Decathlon Digital</span>
          </div>
        </div>
      </div>
    </section>
  );
};
