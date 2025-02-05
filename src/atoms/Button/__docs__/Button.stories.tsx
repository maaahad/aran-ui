import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { AranThemeProvider } from "../../../themes";

const meta: Meta<typeof Example> = {
	title: "Button",
	component: Example,
	decorators: [
		(Story) => (
			<AranThemeProvider theme="green">
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
