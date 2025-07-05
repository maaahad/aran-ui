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

export const Filled: Story = {
	args: {
		disabled: false,
		size: "sm",
	},
};
export const Outlined: Story = {
	args: {
		variant: "outlined",
		disabled: false,
		size: "sm",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		disabled: false,
		size: "sm",
	},
};

export const Loading: Story = {
	args: {
		disabled: false,
		size: "sm",
		loading: true,
		loadingText: "loading...",
	},
};

export const Reverse: Story = {
	args: {
		icon: <div>IC</div>,
		iconPosition: "right",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const Ripple: Story = {
	args: {
		ripple: true,
	},
};
