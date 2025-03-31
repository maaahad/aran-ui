import { MediaConditions } from "../tokens";
import type { ResponsiveProps } from "./types";

// TODO: rename it do something more generic
export const positionPropToCSS = (
	value?: number | `${number}%` | "auto" | "full",
): number | string => {
	if (!value) return 0;

	if (value === "full") return "100%";

	if (typeof value === "number") return `${value}px`;

	return value;
};

// TODO: should we move responsive related stuff in separate file
const ComponentPropToCSSProp: {
	[Property in keyof ResponsiveProps]: string;
} = {
	mt: "margin-top",
	pd: "padding",
	width: "width",
};

export const applyResponsiveCSS = (
	props: ResponsiveProps,
): Record<string, number | string | Record<string, number | string>> => {
	const cssRules = Object.entries(props).reduce(
		(acc, [key, value]) => {
			// TODO: if key is not in the list of responsive prop, return
			if (!value) return acc;

			const cssProp =
				ComponentPropToCSSProp[key as keyof typeof ComponentPropToCSSProp];

			if (typeof value === "object") {
				for (const [k, v] of Object.entries(value)) {
					const mediaCondition =
						MediaConditions[k as keyof typeof MediaConditions];

					if (mediaCondition in acc && typeof acc[mediaCondition] === "object")
						acc[mediaCondition] = {
							...acc[mediaCondition],
							[cssProp as string]: positionPropToCSS(v),
						};
					else
						acc[mediaCondition] = {
							[cssProp as string]: positionPropToCSS(v),
						};
				}
			} else {
				acc[cssProp as string] = positionPropToCSS(value);
			}

			return acc;
		},
		{} as Record<string, string | number | Record<string, string | number>>,
	);

	return cssRules;
};
