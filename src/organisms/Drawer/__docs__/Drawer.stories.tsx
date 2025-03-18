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
		title: <div>This is the title of Drawer</div>,
	},
};
