import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import { AranThemeProvider } from "../../../themes";
import Example from "./Example";

const meta: Meta<typeof Example> = {
	title: "Molecules/SearchInput",
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

export const Outlined: Story = {
	args: {
		size: "lg",
	},
};

export const Filled: Story = {
	args: {
		variant: "filled",
		size: "md",
	},
};

export const Underlined: Story = {
	args: {
		size: "lg",
		variant: "underlined",
	},
};

// export const WithSearchOptions: Story = {
// 	args: {
// 		searchSelect: {
// 			onChangeSearchOption: (value: string) =>
// 				console.log("new search optio", value),
// 			options: [
// 				{ icon: <div>YIcon</div>, label: "Youtube", value: "youtube" },
// 				{ icon: <div>FIcon</div>, label: "Facebook", value: "facebook" },
// 			],
// 		},
// 		width: "full",
// 		mt: 32,
// 	},
// };
