export const Breakpoints = {
	keys: ["xs", "sm", "md", "lg", "xl"],
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536,
	},
} as const;

// TODO: should there be a util to generate mediaConditions based on keys and values???
export const MediaConditions = {
	xs: "@media (0px <= width < 600px)",
	sm: "@media (600px <= width < 900px)",
	md: "@media (900px <= width < 1200px)",
	lg: "@media (1200px <= width < 1536px)",
	xl: "@media (width >= 1536px)",
} as const;
