"use client";

import {
  Fragment, type PropsWithChildren, type ReactElement,
} from "react";
import { IntlProvider } from "react-intl";

import EN from "@/locales/en-GB.json";

export const AppProviders = ({ children }: PropsWithChildren): ReactElement => {
  return (
    <IntlProvider
      locale="en-GB"
      defaultLocale="en-GB"
      messages={EN}
      textComponent={Fragment}
    >
      {children}
    </IntlProvider>
  );
};
