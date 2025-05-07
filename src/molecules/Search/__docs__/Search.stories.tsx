import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Molecules/Search",
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
		placeholder: "Search here",
	},
};

export const WithSearchOptions: Story = {
	args: {
		searchSelect: {
			onChangeSearchOption: (value: string) =>
				console.log("new search optio", value),
			options: [
				{ icon: <div>YIcon</div>, label: "Youtube", value: "youtube" },
				{ icon: <div>FIcon</div>, label: "Facebook", value: "facebook" },
			],
		},
	},
};
