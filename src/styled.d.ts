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
			themeless: {
				primary: string;
				secondary: string;
			};
		};
		breakpoints: {
			keys: string[]; // TODO: (maaahad) replace with TupleType
			values: {
				[Property in "xs" | "sm" | "md" | "lg" | "xl"]: number;
			};
		};
		borderRadius: {
			[Property in "xs" | "sm" | "md" | "lg" | "xl"]: `${number}px`;
		};
		//  borderRadius, transition, font, size, zIndex, ... ...
		elevation: {
			[Property in "sm" | "md" | "lg"]: string;
		};
	}
}
