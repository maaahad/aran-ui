import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Button",
	component: Example,
	decorators: [
		(Story) => (
			<AranThemeProvider theme="light">
				<Story />
			</AranThemeProvider>
		),
	],
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
	args: {
		text: "Button",
		primary: true,
		disabled: false,
		size: "small",
		onClick: () => console.log("Button"),
	},
};
export const Secondary: Story = {
	args: {
		text: "Button",
		primary: false,
		disabled: false,
		size: "small",
		onClick: () => console.log("Button"),
	},
};
