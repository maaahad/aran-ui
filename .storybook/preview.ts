import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		// actions: { argTypesRegex: "^on[A-Z].*" }, // TODO: not needed anymore in bumped storybook
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
