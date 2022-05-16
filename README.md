# ⚡ Energy8 UIkit

[![Version](https://img.shields.io/npm/v/@energy8/uikit)](https://www.npmjs.com/package/@energy8/uikit) [![Size](https://img.shields.io/bundlephobia/min/@energy8/uikit)](https://www.npmjs.com/package/@energy8/uikit)

Energy8 UIkit is a set of React components. It also contains a theme file for purple and pink mode.

## Install

`npm i @energy8/uikit`

## Setup

### Theme

Before using Energy8 UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { Purple } from '@energy8/uikit'
...
<ThemeProvider theme={Purple}>...</ThemeProvider>
```

### Reset

Available global styled component.

```
import { GlobalStyle } from '@energy8/uikit'
...
<GlobalStyle />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://627f725d1ff192004a269462-fyuhxspetg.chromatic.com/)