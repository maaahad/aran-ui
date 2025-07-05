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
		height: "28px",
		padding: "4px 8px",
		borderRadius: "4px",
	},
	sm: {
		height: "32px",
		padding: "6px 12px",
		borderRadius: "6px",
	},
	md: {
		height: "40px",
		padding: "8px 16px",
		borderRadius: "8px",
	},
	lg: {
		height: "48px",
		padding: "10px 20px",
		borderRadius: "12px",
	},
	xl: {
		height: "52px",
		padding: "12px 24px",
		borderRadius: "16px",
	},
};

// TODO: (maaahad) we may not need this util and rely on theme only
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
