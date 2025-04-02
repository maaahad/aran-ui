import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Molecules/Select",
	component: Example,
	decorators: [
		(Story) => (
			<AranThemeProvider>
				<Story />
			</AranThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
	args: {
		formLabel: "Select option with responsive margin top",
		placeholder: "Select",
		width: "full",
		pd: 24,
		mt: {
			xs: 8,
			sm: 16,
			xl: 24,
		},
	},
};
