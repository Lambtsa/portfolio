import type { ReactElement } from "react";

import { Button } from "@/components/button";
import { routes } from "@/utils/routes";

export const FourOhFour = (): ReactElement => {
  return (
    <main className="flex-[1_1_100%] overflow-x-hidden min-w-full max-w-screen bg-eerie">
      <div className="relative flex flex-col justify-center items-center gap-4 h-screen min-h-screen max-w-pc mx-auto px-4">
        <h1 className="max-w-tablet text-center text-5xl leading-[48px] font-bold text-linen">404</h1>
        <p className="max-w-tablet text-center body-text">
          {"Oups! Looks like this page doesn't exist just yet."}
        </p>
        <Button href={routes.index()} content="Return to Home" />
      </div>
    </main>
  );
};
