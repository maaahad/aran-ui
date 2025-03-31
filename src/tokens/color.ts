// TODO: (maaahad) add color based on shadcn
// Ref: https://ui.shadcn.com/colors

// NOTE: colors names are adopted from the Dragon Ball Z approach
// Ref: https://moon.io/themes
export type ThemeMode = "light" | "dark";

type MainColorName =
	| "piccolo"
	| "hit"
	| "beerus"
	| "goku"
	| "gohan"
	| "bulma"
	| "trunks"
	| "goten"
	| "popo"
	| "jiren"
	| "heles"
	| "zeno";

export type ColorPalette = {
	main: {
		[Property in ThemeMode]: {
			[Property in MainColorName]: string;
		};
	};
	supportive: Record<string, string>;
};

export const COLOR_PALETTE: ColorPalette = {
	// The main colors serve a specific purpose.
	main: {
		light: {
			// piccolo and hit are used for accent colors;
			// beerus for borders and lines
			// goku and gohan for backgrounds
			// bulma and trunks for text and icon
			// goten and popo for forces theme-less colors
			// jiren, heles and zenon for semi-transparent overlays
			piccolo: "#5c33cf",
			hit: "#1bd29a",
			beerus: "#dcdee3",
			goku: "#ffffff",
			gohan: "#f6f7f9",
			bulma: "#000000",
			trunks: "#687083",
			goten: "#ffffff",
			popo: "#000000",
			jiren: "#ebe6f9",
			heles: "#f5f5f5",
			zeno: "#707070",
		},
		dark: {
			// TODO: update dark colors
			piccolo: "#4E46B4",
			hit: "#40A69F",
			beerus: "#EBEBEB",
			goku: "#F5F5F5",
			gohan: "#FFFFFF",
			bulma: "#000000",
			trunks: "#999CA0",
			goten: "#FFFFFF",
			popo: "#000000",
			jiren: "#4E46B41F",
			heles: "#00000014",
			zeno: "#0000008F",
		},
	},
	// Every HEX color in all supportive colors is presented by three shades
	// The difference between shades is in their transparency level
	// Some colors may have a semantic purpose.
	// krillin is ususlly used for warnngs,
	// chichi for errors
	// roshi for success colors. Other color are used for variety of secondary reasons
	// The difference between shades is in their transparency level
	// Some colors may have a semantic purpose.
	// krillin is ususlly used for warnngs,
	// chichi for errors
	// roshi for success colors. Other color are used for variety of secondary reasons
	supportive: {
		krillin: "#ffb319",
		krillin_60: "#ffd47e",
		krillin_10: "#fff9ed",
		chichi: "#ff4e64",
		chichi_60: "#ff9ba8",
		chichi_10: "#fff1f3",
		roshi: "#49b356",
		roshi_60: "#99d4a0",
		roshi_10: "#f0f9f2",
		dodoria: "#d33030",
		dodoria_60: "#e68b8b",
		dodoria_10: "#fceeee",
		cell: "#95f1d5",
		cell_60: "#c3f7e7",
		cell_10: "#f7fefc",
		raditz: "#b3804a",
		raditz_60: "#d4b899",
		raditz_10: "#f9f5f1",
		whis: "#3448f0",
		whis_60: "#8d98f7",
		whis_10: "#eff0fe",
		frieza: "#5c33cf",
		frieza_60: "#a38ce4",
		frieza_10: "#f2effb",
		nappa: "#725550",
		nappa_60: "#b09f9d",
		nappa_10: "#f4f1f1",
	},
};
