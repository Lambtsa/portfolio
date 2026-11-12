import type { Metadata } from "next";
import type { ReactElement } from "react";

import { URLS } from "@/constants/url";
import { HomeScreen } from "@/screens/home";
import { createMetadata, pageData } from "@/utils/metadata";

export const metadata: Metadata = createMetadata(pageData.index);

/* Structured data so search engines can tie the site and profiles to one person */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tom Lamb",
  url: URLS.PROD,
  image: `${URLS.PROD}/og-image.png`,
  jobTitle: "Tech Lead & Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Decathlon Digital",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  sameAs: [URLS.GITHUB, URLS.LINKEDIN, URLS.INSTAGRAM],
};

const Home = (): ReactElement => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") 
        }}
      />
      <HomeScreen />
    </>
  );
};

export default Home;
