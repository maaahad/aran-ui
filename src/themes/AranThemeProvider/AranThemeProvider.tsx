import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  color: "red",
};

const AranThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AranThemeProvider;
