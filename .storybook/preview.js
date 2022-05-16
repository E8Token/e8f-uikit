import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import { GlobalStyle, Purple, Pink } from '../src'

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
    ...Purple,
  },
  {
    name: "Pink",
    backgroundColor: '#000000',
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