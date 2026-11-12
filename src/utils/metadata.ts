import type { Metadata } from "next";

import { routes } from "@/utils/routes";

export interface MetaData {
  title: string;
  description: string;
  url: string;
}

interface Pages {
  index: MetaData;
}

export const pageData: Pages = {
  index: {
    title: "Tom Lamb | Tech Lead & Software Engineer",
    description: "Tech lead and software engineer in Paris. Java, Kafka, Kubernetes and TypeScript, with a background in product management and UX/UI design.",
    url: routes.index(),
  },
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
}: MetaData): Metadata => {
  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: ["/og-image.png"],
      locale: "en_GB",
      type: "website",
    },
    robots: {
      index: !isDevelopment,
      follow: !isDevelopment,
      googleBot: {
        index: !isDevelopment,
        follow: !isDevelopment,
      },
    },
    icons: {
      icon: ["/favicon.svg", "/favicon.ico"],
      apple: "/logo192.png",
    },
  };
};
