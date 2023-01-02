import URL from "@constants/url";
import { routes } from "./routes";
export interface MetaData {
  title: string;
  description: string;
  url: string;
  production: boolean;
}

interface Pages {
  default: Omit<MetaData, "production">;
  index: Omit<MetaData, "production">;
}

const buildUrl = (path: string): string => {
  return process.env.NODE_ENV === "production"
    ? `${URL.PROD}${path}`
    : `${URL.DEV}${path}`;
};

export const pageData: Pages = {
  default: {
    title: "Tom Lamb | Full Stack Javascript Developer and Product Manager.",
    description:
      "I am full stack Javascript developer and product manager who has worked in both LegalTech and Fintech within the Stockholm startup ecosystem.",
    url: buildUrl(routes.index()),
  },
  index: {
    title: "Tom Lamb | Full Stack Javascript Developer and Product Manager.",
    description:
      "I am full stack Javascript developer and product manager who has worked in both LegalTech and Fintech within the Stockholm startup ecosystem.",
    url: buildUrl(routes.index()),
  },
};
