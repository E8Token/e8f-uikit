import {createGlobalStyle} from "styled-components";

export enum ThemeId {
    Pink,
    Purple,
}

export const Purple = {
    mainColor: "#6B38FF",
    borderColor: "#6B38FF",
    mainBlockBorderColor: "#473cc2bf",
    mainBackgroundLinearGradient: "linear-gradient(180deg, #6B38FF 0%, #6A17C9 100%)",
    btnNoWhiteFontColor: "#6B38FF",
    btnBorderLinearGradient: "linear-gradient(180deg, #6B38FF 0%, #B338FF 100%)",
    btnBackgroundLinearGradient: "linear-gradient(180deg, #6B38FF 0%, #6A17C9 100%)",
    btnBackgroundLinearGradientActive: "linear-gradient(84.62deg, #6B38FF 0%, #6A17C9 80.68%)",
    dropdownRowBackgroundLinearGradient: "linear-gradient(180deg, #6B38FF 0%, #6A17C9 100%);",
    btnBackgroundLinearGradientDisabled: "linear-gradient(180deg,#6B38FF80 0%,#6A17C9a6 100%)",
    cardBackgroundLinearGradient: "linear-gradient(180deg, #160539 0%, rgba(26, 8, 65, 0) 69.06%)",
    cardBorderBackgroundLinearGradient: "linear-gradient(180deg, rgba(130, 82, 208, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
    mainBackground: `url(assets/images/background.png)`,
}

export const Pink = {
    mainColor: "#E8327C",
    borderColor: "#E8327C",
    mainBlockBorderColor: "#c23c8ebf",
    mainBackgroundLinearGradient: "linear-gradient(180deg,#E8327C 0%,#C23C8E 100%)",
    btnNoWhiteFontColor: "#E8327C",
    btnBorderLinearGradient: "linear-gradient(180deg,#E8327C 0%,#C23C8E 100%);",
    btnBackgroundLinearGradient: "linear-gradient(180deg, #E8327C 0%, #C23C8E 100%)",
    btnBackgroundLinearGradientActive: "linear-gradient(84.62deg, #E8327C 0%, #C23C8E 80.68%)",
    dropdownRowBackgroundLinearGradient: "linear-gradient(180deg, #E8327C 0%, #C23C8E 100%)",
    btnBackgroundLinearGradientDisabled: "linear-gradient(180deg,#E8327C80 0%,#C23C8Ea6 100%)",
    cardBackgroundLinearGradient: "linear-gradient(180deg, #852961 0%, rgba(26, 8, 65, 0) 69.06%)",
    cardBorderBackgroundLinearGradient: "linear-gradient(180deg, rgba(208 82 144 / 50%) 0%, rgba(0, 0, 0, 0) 100%)",
    mainBackground: `url(assets/images/background.png)`,
}

export const themeList = {
    [ThemeId.Purple]: {
        ...Purple
    },
    [ThemeId.Pink]: {
        ...Pink
    },
};

export const theme = themeList[ThemeId.Purple];

export const GlobalStyle = createGlobalStyle`
  iframe {
    pointer-events: none;
  }
  
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: 'Montserrat';
  }
  
  body {
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`