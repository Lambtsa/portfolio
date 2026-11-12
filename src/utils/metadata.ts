import type { Metadata } from "next";

import { routes } from "@/utils/routes";

export interface MetaData {
  title: string;
  description: string;
  url: string;
  /* Keep the page out of search results (e.g. the 404 page) */
  noIndex?: boolean;
}

interface Pages {
  index: MetaData;
  notFound: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "Tom Lamb | Tech Lead & Software Engineer",
    description: "Tech lead and software engineer in Paris. Java, Kafka, Kubernetes and TypeScript, with a background in product management and UX/UI design.",
    url: routes.index(),
  },
  notFound: {
    title: "Page not found | Tom Lamb",
    description: "This page doesn't exist. Head back to tom-lamb.com.",
    url: routes.index(),
    noIndex: true,
  },
};

export const SITE_NAME = "Tom Lamb";

/* Bump the version when the image changes, so link-preview caches fetch the new one */
const OG_IMAGE = {
  url: "/og-image.png?v=2",
  width: 1200,
  height: 630,
  alt: "Tom Lamb, Tech Lead & Software Engineer in Paris",
};

const isDevelopment = process.env.NODE_ENV === "development";

/**
 * Page metadata (title, link previews, robots). Relative URLs are made
 * absolute with the metadataBase that the root layout works out from each
 * request.
 */
export const createMetadata = ({
  title,
  description,
  url,
  noIndex = false,
}: MetaData): Metadata => {
  const index = !isDevelopment && !noIndex;

  return {
    title,
    description,
    applicationName: SITE_NAME,
    authors: [{
      name: SITE_NAME,
      url: "/" 
    }],
    creator: SITE_NAME,
    alternates: {
      canonical: noIndex ? undefined : url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [OG_IMAGE],
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
    robots: {
      index,
      follow: !isDevelopment,
      googleBot: {
        index,
        follow: !isDevelopment,
        "max-image-preview": "large",
      },
    },
    icons: {
      icon: ["/favicon.svg", "/favicon.ico"],
      apple: "/logo192.png",
    },
  };
};
