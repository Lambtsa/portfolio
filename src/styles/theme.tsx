import type { DefaultTheme } from "styled-components";

/**
 * @see https://coolors.co/
 */
const colors = {
  caribbeanGreen: "rgba(52, 211, 153, 1)",
  eerieBlack: "#1a1917",
  eerieBlack80: "rgba(26, 25, 23, 0.8)",
  hotPink: "rgba(244, 114, 182, 1)",
  linen: "rgba(248, 236, 223, 1)",
  linen70: "rgba(248, 236, 223, 0.7)",
  redPurple: "rgba(219, 39, 119, 1)",
};

const fontWeights = {
  bold: "700",
  regular: "400",
};

const zIndexes = {
  toast: 1000,
};

export const theme: DefaultTheme = {
  colors,
  fontWeights,
  zIndexes,
};
