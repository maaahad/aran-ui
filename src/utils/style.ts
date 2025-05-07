import { MediaQueries } from "../tokens";
import type { ComponentResponsiveProps } from "./types";

type CSSRuleObject = Record<
	string,
	number | string | Record<string, number | string>
>;

export const getCSSPropValue = (
	value?: number | `${number}%` | "auto" | "full",
): number | string => {
	if (!value) return 0;

	if (value === "full") return "100%";

	if (typeof value === "number") return `${value}px`;

	return value;
};

// TODO: should we move responsive related stuff in separate file
const ComponentPropToCSSProp: {
	[Property in keyof ComponentResponsiveProps]: string;
} = {
	mt: "margin-top",
	pd: "padding",
	width: "width",
};

export const applyResponsiveCSS = (
	props: ComponentResponsiveProps,
): CSSRuleObject => {
	const cssRuleObject = Object.entries(props).reduce((acc, [key, value]) => {
		// TODO: if key is not in the list of responsive prop, return
		if (!value || !(key in ComponentPropToCSSProp)) return acc;

		const cssProp =
			ComponentPropToCSSProp[key as keyof typeof ComponentPropToCSSProp];

		if (typeof value === "object") {
			for (const [k, v] of Object.entries(value)) {
				const mediaQuery = MediaQueries[k as keyof typeof MediaQueries];

				if (mediaQuery in acc && typeof acc[mediaQuery] === "object")
					acc[mediaQuery] = {
						...acc[mediaQuery],
						[cssProp as string]: getCSSPropValue(v),
					};
				else
					acc[mediaQuery] = {
						[cssProp as string]: getCSSPropValue(v),
					};
			}
		} else {
			acc[cssProp as string] = getCSSPropValue(value);
		}

		return acc;
	}, {} as CSSRuleObject);

	return cssRuleObject;
};
