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
			"@media (0 <= width < 600)": {
				"margin-top": "200px",
				padding: "200px",
			},
			"@media (600 <= width < 900)": {
				"margin-top": "100%",
				padding: "100%",
			},
			"@media (900 <= width < 1200)": {
				"margin-top": "auto",
			},
			"@media (1200 <= width < 1536)": {
				"margin-top": "auto",
				width: "300px",
			},
			"@media (width >= 1536)": {
				"margin-top": "500px",
				width: "400px",
			},
		};

		expect(applyResponsiveCSS(responsiveProps)).toBe(
			JSON.stringify(expected, undefined, 2),
		);
	});
});
