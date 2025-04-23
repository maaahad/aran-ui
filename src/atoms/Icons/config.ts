import type { IconProps } from "./types";

export const ICON_CONFIG: {
	[Property in Required<IconProps>["size"]]: {
		height: string;
		width: string;
	};
} = {
	sm: {
		height: "12",
		width: "12",
	},
	md: {
		height: "16",
		width: "16",
	},
	lg: {
		height: "20",
		width: "20",
	},
};
