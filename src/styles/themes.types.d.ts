import "styled-components";

interface Colors {
  caribbeanGreen: string;
  eerieBlack: string;
  eerieBlack80: string;
  hotPink: string;
  linen: string;
  linen70: string;
  redPurple: string;
}

interface FontWeights {
  bold: string;
  regular: string;
}

interface ZIndexes {
  toast: number;
}

declare module "styled-components" {
  export interface DefaultTheme {
    colors: Colors;
    fontWeights: FontWeights;
    zIndexes: ZIndexes;
  }
}
