import type React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import type { ThemeMode } from "../../tokens/color";
import { theme as defaultTheme } from "../tokens";

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

export const AranThemeProvider: React.FC<
	React.PropsWithChildren<{ theme?: ThemeMode }>
> = ({ children }) => {
	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
