import "./globals.css";

import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { type ReactNode } from "react";

import { baseUrlFromHeaders } from "@/utils/baseUrl";

import { AppProviders } from "./AppProviders";

type LayoutProps = {
  readonly children: ReactNode;
};

/*
 * Link previews need absolute URLs. Take the site's address from the request
 * rather than from a build setting, so one image works on any domain. Every
 * page inherits this metadataBase.
 */
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    metadataBase: baseUrlFromHeaders(await headers()),
  };
};

/* Google Analytics id, read when the page is served (set GTAG in the server's env) */
const GoogleAnalytics = () => {
  const id = process.env.GTAG;

  if (!id) {
    return null;
  }

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${JSON.stringify(id)});
        `}
      </Script>
    </>
  );
};

const RootLayout = ({ children }: LayoutProps) => (
  <html lang="en">
    <head>
      <GoogleAnalytics />
    </head>
    <body suppressHydrationWarning>
      <AppProviders>
        <div className="flex flex-col items-center min-h-screen w-full">
          {children}
        </div>
      </AppProviders>
    </body>
  </html>
);

export default RootLayout;
