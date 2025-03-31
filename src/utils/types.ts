import type { Breakpoints } from "../tokens";

/**
 * =========== Responsive Props ==========
 */
type ResponsiveProp<T> =
	| T
	| {
			[Property in (typeof Breakpoints)["keys"][number]]?: T;
	  };

export type ResponsiveProps = {
	mt?: ResponsiveProp<number | `${number}%` | "auto">;
	pd?: ResponsiveProp<number | `${number}%`>;
	width?: ResponsiveProp<number | `${number}%` | "auto" | "full">;
};

/**
 * =========== Other Component Props ==========
 */
export type ComponentState = {
	state?: "valid" | "invalid";
};

export type ComponentSize = {
	size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export type ComponentProps = ResponsiveProps & {
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

/**
 * =========== CSS ==========
 */
export type CSSRuleObject = Record<
	string,
	number | string | Record<string, number | string>
>;
