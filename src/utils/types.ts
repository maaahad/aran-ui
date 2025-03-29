// NOTE:  util types
export type ComponentPosition = {
	[Property in "mt" | "pd"]?: number | `${number}%` | "auto";
};

export type ComponentState = {
	state?: "valid" | "invalid";
};

export type ComponentSize = {
	size?: "sm" | "md" | "lg" | "xl";
};

export type ComponentWidth = {
	width?: number | `${number}%` | "auto" | "full";
};

export type ComponentProps = ComponentPosition & {
	className?: string;
};
