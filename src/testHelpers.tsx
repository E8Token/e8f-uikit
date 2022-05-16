import React, { ReactNode } from "react";
import { render, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { Purple } from "./theme";

/* eslint-disable import/prefer-default-export */
export const renderWithTheme = (component: ReactNode): RenderResult => {
  return render(<ThemeProvider theme={Purple}>{component}</ThemeProvider>);
};
