import type React from "react";
import {
	type DefaultTheme,
	ThemeProvider,
	createGlobalStyle,
} from "styled-components";
import { type Theme, getColorToken } from "../../tokens/color";

const getTheme = (theme: Theme): DefaultTheme => {
	return {
		color: getColorToken(theme),
	};
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

export const AranThemeProvider: React.FC<
	React.PropsWithChildren<{ theme?: Theme }>
> = ({ children, theme = "default" }) => {
	return (
		<ThemeProvider theme={getTheme(theme as Theme)}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
