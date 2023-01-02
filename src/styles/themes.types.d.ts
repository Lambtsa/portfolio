import "styled-components";

interface Colors {
  caribbeanGreen: string;
  eerieBlack: string;
  eerieBlack80: string;
  linen: string;
  linen70: string;
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
