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
	};
};

export const getTheme = (theme: ThemeMode): DefaultTheme => {
	return {
		color: getColorToken(theme),
		breakpoints: Breakpoints,
	};
};
