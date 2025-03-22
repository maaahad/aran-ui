import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Organisms/Drawer",
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
		showCloseIcon: true,
		header: <div>This is the header of Drawer</div>,
		footer: <div>This is the Footer of Drawer</div>,
	},
};

export const FromRight: Story = {
	args: {
		showCloseIcon: true,
		from: "right",
		header: <div>Should visible from Right side of View Port"</div>,
	},
};
