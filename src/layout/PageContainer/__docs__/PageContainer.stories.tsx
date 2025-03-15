import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Layout/Page Container",
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

export const Fluid: Story = {
	args: {
		width: "fluid",
		children: <div>This is a fluid Container </div>,
	},
};

export const Standard: Story = {
	args: {
		children: <div>This is a Standard Container </div>,
	},
};

export const Large: Story = {
	args: {
		width: "large",
		children: <div>This is a Large Container </div>,
	},
};
