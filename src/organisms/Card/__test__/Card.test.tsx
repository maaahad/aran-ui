import { render } from "@testing-library/react";
// TODO: add some integration/unit test and merge the pr
import React from "react";
import type { ComponentProps, FC } from "react";
import { describe, expect, test } from "vitest";
import { AranThemeProvider } from "../../../themes";
import { Card } from "../Card";

const TestWrapper: FC<ComponentProps<typeof Card>> = (props) => {
	return (
		<AranThemeProvider>
			<Card {...props} />
		</AranThemeProvider>
	);
};

describe("Card", () => {
	test("should render header", () => {
		const headerClassName = "header";
		const header = "This is header";
		const { container } = render(
			<TestWrapper headerClassName={headerClassName} header={header} />,
		);

		const headerElements = container.getElementsByClassName(headerClassName);

		expect(headerElements.length).toBe(1);
		expect(headerElements[0].innerHTML).toBe(header);
	});

	test("should render footer", () => {
		const footerClassName = "footer";
		const footer = "This is footer";
		const { container } = render(
			<TestWrapper footerClassName={footerClassName} footer={footer} />,
		);

		const footerElements = container.getElementsByClassName(footerClassName);

		expect(footerElements.length).toBe(1);
		expect(footerElements[0].innerHTML).toBe(footer);
	});

	test("should have right top margin", () => {
		const { container } = render(<TestWrapper className="card" mt={80} />);
		const card = container.getElementsByClassName("card");

		expect(card.length).toBe(1);
		expect(getComputedStyle(card[0]).marginTop).toBe("80px");
	});
});
