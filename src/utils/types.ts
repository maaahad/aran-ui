// NOTE:  util types
export type ComponentPositionProps = {
	[Property in "mt" | "pd"]?: number | `${number}%`;
};

export type ComponentProps = ComponentPositionProps & {
	className?: string;
};
