import type { Meta, StoryObj } from "@storybook/react/*";
import React from "react";
import Example from "./Example";
import { AranThemeProvider } from "../../../themes";


const meta: Meta<typeof Example> = {
	title: 'Molecules/Search',
	component: Example,
	decorators: [
		(Story) => (
			<AranThemeProvider>
				<Story />
			</AranThemeProvider>
		)
	]
}

export default meta

type Story = StoryObj<typeof Example>

export const Default: Story = {
	args: {
		placeholder: "Search here",
		searchIcon: <div>magnify glass</div>
	}
}


