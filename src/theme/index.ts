import {createGlobalStyle} from "styled-components";

export enum ThemeId {
    Pink,
    Purple,
}

export const MainBackgroundColor = `#0b0112`

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
    mainBackgroundColor: MainBackgroundColor,
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
    mainBackgroundColor: MainBackgroundColor,
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
  /* prettier-ignore */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  /* prettier-ignore */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  iframe {
    pointer-events: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${MainBackgroundColor};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
`