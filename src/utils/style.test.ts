import { describe, expect, test } from "vitest";
import { applyResponsiveCSS } from "./style";
import type { ResponsiveProps } from "./types";

describe("style utils", () => {
	test("should apply responsive css", () => {
		const responsiveProps: ResponsiveProps = {
			mt: {
				xs: 200,
				sm: "100%",
				md: "auto",
				lg: "auto",
				xl: 500,
			},
			pd: {
				xs: 200,
				sm: "100%",
			},
			width: {
				lg: 300,
				xl: 400,
			},
		};

		const expected = {
			"@media (0px <= width < 600px)": {
				"margin-top": "200px",
				padding: "200px",
			},
			"@media (600px <= width < 900px)": {
				"margin-top": "100%",
				padding: "100%",
			},
			"@media (900px <= width < 1200px)": {
				"margin-top": "auto",
			},
			"@media (1200px <= width < 1536px)": {
				"margin-top": "auto",
				width: "300px",
			},
			"@media (width >= 1536px)": {
				"margin-top": "500px",
				width: "400px",
			},
		};

		expect(applyResponsiveCSS(responsiveProps)).toStrictEqual(expected);
	});
});
