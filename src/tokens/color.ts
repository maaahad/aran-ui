import type { DefaultTheme } from "styled-components";
export enum Gray {
	P10 = "#fbfafd",
	P50 = "#ececef",
	P100 = "#dcdcde",
	P200 = "#bfbfc3",
	P300 = "#a4a3a8",
	P400 = "#89888d",
	P500 = "#737278",
	P600 = "#626168",
	P700 = "#535158",
	P800 = "#434248",
	P900 = "#333238",
	P950 = "#1f1e24",
}

export enum Green {
	P50 = "#ecf4ee",
	P100 = "#c3e6cd",
	P200 = "#91d4a8",
	P300 = "#52b87a",
	P400 = "#2da160",
	P500 = "#108548",
	P600 = "#217645",
	P700 = "#24663b",
	P800 = "#0d532a",
	P900 = "#0a4020",
	P950 = "#072b15",
}

export type ColorToken = Gray | Green;
export type Theme = "default" | "green";
// Add other enum for other color options
export const PALETTE = {
	GRAY: Gray,
	GREEN: Green,
	// add other color palette
};

export const getColorToken = (theme: Theme): DefaultTheme["color"] => {
	// Should be based on theme param
	const palette =
		theme === "default"
			? ("GRAY" as keyof typeof PALETTE)
			: ((theme as string).toUpperCase() as keyof typeof PALETTE);
	return {
		text: {
			body: {
				primary: PALETTE[palette].P500,
				secondary: PALETTE[palette].P200,
				tertiary: PALETTE[palette].P600,
			},
		},
	};
};
