// NOTE:  util types
// TODO: (maaahad) add other responsive Prop as incrementally
import type { Breakpoints } from "../tokens";

// responsive props
type ResponsiveProp<T> =
	| T
	| {
			[Property in (typeof Breakpoints)["keys"][number]]?: T;
	  };

export type ResponsiveProps = {
	mt?: ResponsiveProp<number | `${number}%` | "auto">;
	pd?: ResponsiveProp<number | `${number}%`>;
};

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

// TODO: (maaahad) try to understand these two generic type decleration
type _TupleOf<T, N extends number, R extends unknown[]> = R["length"] extends N
	? R
	: _TupleOf<T, N, [T, ...R]>;

export type Tuple<T, N extends number> = N extends N
	? number extends N
		? T[]
		: _TupleOf<T, N, []>
	: never;
