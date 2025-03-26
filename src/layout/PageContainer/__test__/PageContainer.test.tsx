import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import { PageContainer } from "../PageContainer";

describe("PageContainer", () => {
	test("should render with width 100%", () => {
		const { container } = render(<PageContainer width="fluid" />);
		const page = container.querySelector('[width="fluid"]');
		expect(page).not.toBe(null);
		expect(getComputedStyle(page!).width).toBe("100%");
	});

	test("should render with width 990px", () => {
		const { container } = render(<PageContainer />);
		const page = container.querySelector('[width="standard"]');
		expect(page).not.toBe(null);
		expect(getComputedStyle(page!).width).toBe("990px");
	});

	test("should render with width 1290px", () => {
		const { container } = render(<PageContainer width="large" />);
		const page = container.querySelector('[width="large"]');
		expect(page).not.toBe(null);
		expect(getComputedStyle(page!).width).toBe("1280px");
	});
});
