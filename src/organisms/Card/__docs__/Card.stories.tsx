import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Organisms/Card",
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
		header: <div>This is header</div>,
		footer: <div>This is footer</div>,
	},
};

export const OnlyContent: Story = {
	args: {},
};

export const WithHeaderOnly: Story = {
	args: {
		header: <div>This is header</div>,
	},
};

export const WithFooterOnly: Story = {
	args: {
		footer: <div>This is footer</div>,
	},
};
