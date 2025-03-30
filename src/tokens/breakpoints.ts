export const Breakpoints = {
	keys: ["xs", "sm", "md", "lg", "xl"],
	values: {
		xs: 0,
		sm: 600,
		md: 900,
		lg: 1200,
		xl: 1536,
	},
	// TODO: should there be a util to generate mediaConditions based on keys and values???
	mediaConditions: {
		xs: "0 <= width < 600",
		sm: "600 <= width < 900",
		md: "900 <= width < 1200",
		lg: "1200 <= width < 1536",
		xl: "width >= 1536",
	},
} as const;
