import type { DefaultTheme } from "styled-components";
import type { ComponentSize, ComponentVariant } from "../utils/types";

export const SIZE_STYLES_CONFIG: {
	[Property in Required<ComponentSize>["size"]]: {
		height: `${number}px`;
		padding: `${number}px ${number}px`;
		borderRadius: `${number}px`;
	};
} = {
	xs: {
		height: "16px",
		padding: "4px 8px",
		borderRadius: "2px",
	},
	sm: {
		height: "24px",
		padding: "4px 8px",
		borderRadius: "4px",
	},
	md: {
		height: "32px",
		padding: "4px 8px",
		borderRadius: "6px",
	},
	lg: {
		height: "40px",
		padding: "8px 16px",
		borderRadius: "8px",
	},
	xl: {
		height: "48px",
		padding: "12px 16px",
		borderRadius: "12px",
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
		filled: {
			backgroundColor: theme.color.background.secondary,
			line: "transparent",
		},
		underlined: {
			backgroundColor: "transparent",
			line: theme.color.line,
		},
	};
};
