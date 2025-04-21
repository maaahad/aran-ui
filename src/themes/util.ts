import type { DefaultTheme } from "styled-components/dist/types";

import { Breakpoints } from "../tokens";
import { COLOR_PALETTE, type ThemeMode } from "../tokens/color";

const getColorToken = (mode: ThemeMode): DefaultTheme["color"] => {
	const mainPalette = COLOR_PALETTE.main[mode];
	return {
		mode: mode,
		text: {
			primary: mainPalette.bulma,
			secondary: mainPalette.trunks,
			disabled: mainPalette.gohan,
		},
		accent: {
			primary: mainPalette.piccolo,
			secondary: mainPalette.hit,
		},
		line: mainPalette.beerus,
		background: {
			primary: mainPalette.goku,
			secondary: mainPalette.gohan,
		},
		icon: {
			primary: mainPalette.bulma,
			secondary: mainPalette.trunks,
			disabled: mainPalette.gohan,
		},
		overlay: {
			primary: mainPalette.heles,
			secondary: mainPalette.zeno,
			tertiary: mainPalette.jiren,
		},
		themeless: {
			primary: mainPalette.goten,
			secondary: mainPalette.popo,
		},
	};
};

export const getTheme = (theme: ThemeMode): DefaultTheme => {
	return {
		color: getColorToken(theme),
		breakpoints: Breakpoints,
		elevation: {
			sm: "0px 1px 2px rgba(0, 0, 0, 0.1)",
			md: "0px 2px 8px rgba(0, 0, 0, 0.16),0px 0px 2px rgba(0, 0, 0, 0.16)",
			lg: "0px 4px 12px rgba(0, 0, 0, 0.16),0px 0px 4px rgba(0, 0, 0, 0.16)",
		},
	};
};
