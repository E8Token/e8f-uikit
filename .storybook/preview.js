import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import { GlobalStyle, Purple, Pink } from '../src/theme'

const globalDecorator = (StoryFn) => (
    <React.Fragment>
      <GlobalStyle />
      <div style={{ padding: "1rem" }}>{StoryFn()}</div>
    </React.Fragment>
);

const themes = [
  {
    name: "Purple",
    backgroundColor: '#000000',
    //backgroundColor: Purple.mainBackground,
    ...Purple,
  },
  {
    name: "Pink",
    backgroundColor: '#000000',
    //backgroundColor: Pink.mainBackground,
    ...Pink,
  },
];


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [globalDecorator, withThemesProvider(themes)];