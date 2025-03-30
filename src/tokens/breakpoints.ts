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
	xs: "@media (0 <= width < 600)",
	sm: "@media (600 <= width < 900)",
	md: "@media (900 <= width < 1200)",
	lg: "@media (1200 <= width < 1536)",
	xl: "@media (width >= 1536)",
} as const;
