import { ResponsiveProp } from "./types";

export const positionPropToCSS = (
	value?: number | `${number}%` | "auto" | "full",
): number | string => {
	if (!value) return 0;

	if (value === "full") return "100%";

	if (typeof value === "number") return `${value}px`;

	return value;
};

// TODO: (maaaha) implement it later
export const applyResponsiveCSS = (
	props: {
		[Property in ResponsiveProp]: "string" | `${number}%` | "auto" | "full";
	},
): string => {
	return JSON.stringify({});
};
