import type React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import type { ThemeMode } from "../../tokens/color";
import { lightTheme, darkTheme } from "../tokens";

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
> = ({ children, theme = "light" }) => {
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
