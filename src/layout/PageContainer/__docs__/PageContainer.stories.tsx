import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { AranThemeProvider } from "../../../themes";

const meta: Meta<typeof Example> = {
	title: "Page Container",
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
	args: {},
};

export const Fixed: Story = {
	args: {},
};
