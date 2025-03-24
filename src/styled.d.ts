// import original module decleartion
import "styled-components";
import type { ThemeMode } from "./tokens/color";

// extending styled-components
declare module "styled-components" {
	export interface DefaultTheme {
		color: {
			mode: ThemeMode;
			text: {
				primary: string;
				secondary: string;
				disabled: string;
			};
			accent: {
				primary: string;
				secondary: string;
			};
			line: string;
			background: {
				primary: string;
				secondary: string;
			};
			icon: {
				primary: string;
				secondary: string;
				disabled: string;
			};
			overlay: {
				primary: string;
				secondary: string;
				tertiary: string;
			};
			// TODO: themeless
		};
		// size, breakpoint, zIndex, ... ...
	}
}
