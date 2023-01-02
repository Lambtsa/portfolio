import "styled-components";

interface Colors {
  bluetiful: string;
  caribbeanGreen: string;
  eerieBlack: string;
  eerieBlack80: string;
  hotPink: string;
  linen: string;
  linen20: string;
  linen40: string;
  linen70: string;
  mediumStateBlue: string;
  redPurple: string;
  smokeBlack: string;
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
