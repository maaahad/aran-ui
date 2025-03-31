import type React from "react";
import {
	type DefaultTheme,
	ThemeProvider,
	createGlobalStyle,
} from "styled-components";
import { Breakpoints } from "../../tokens";
import { type ThemeMode, getColorToken } from "../../tokens/color";

// TODO: (maaahad) Move this to separate file
const getTheme = (theme: ThemeMode): DefaultTheme => {
	return {
		color: getColorToken(theme),
		breakpoints: Breakpoints,
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
	React.PropsWithChildren<{ theme?: ThemeMode }>
> = ({ children, theme = "light" }) => {
	return (
		<ThemeProvider theme={getTheme(theme as ThemeMode)}>
			<GlobalStyle />
			{children}
		</ThemeProvider>
	);
};
