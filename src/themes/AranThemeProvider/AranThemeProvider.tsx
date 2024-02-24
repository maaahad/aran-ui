import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  color: "red",
};

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
    *, *:before, *:after {
        margin: 0; 
        padding: 0;
        box-sizing: border-box;
    }
`;

const AranThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AranThemeProvider;
