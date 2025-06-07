import type { DefaultTheme } from "styled-components";
import type { ComponentSize, ComponentVariant } from "../utils/types";

export const STYLES_CONFIG: {
	[Property in Required<ComponentSize>["size"]]: {
		height: `${number}px`;
		padding: `${number}px ${number}px`;
	};
} = {
	xs: {
		height: "16px",
		padding: "4px 8px",
	},
	sm: {
		height: "24px",
		padding: "4px 8px",
	},
	md: {
		height: "32px",
		padding: "4px 8px",
	},
	lg: {
		height: "40px",
		padding: "8px 16px",
	},
	xl: {
		height: "48px",
		padding: "12px 16px",
	},
};

export const getVariantConfig = (
	theme: DefaultTheme,
): {
	[Property in ComponentVariant]: {
		backgroundColor: string;
		line: string;
	};
} => {
	return {
		outlined: {
			backgroundColor: "transparent",
			line: theme.color.line,
		},
		subtle: {
			backgroundColor: theme.color.background.secondary,
			line: "transparent",
		},
		underlined: {
			backgroundColor: "transparent",
			line: theme.color.line,
		},
	};
};
