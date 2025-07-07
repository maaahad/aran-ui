// ---------------------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------------------

type ColorShades = {
	[key: number]: string; // Numeric scale: e.g., gray[100], gray[200]
};

/**
 * Brand level color tokens in Raw format
 * Component should not use this tokec direcly in stead should use ThemeSemanticColors
 * It will increase maintainability
 */

type ThemeColors = {
	white: string; // Base white, used for light background
	black: string; // Base black, often used for text and dark background

	gray: ColorShades; // Neutral grays, used for text, background, borders

	primary: {
		default: string; // Brand primary. e.g., black
		contrast: string; // Contrast text color on primary, usually white
	};
	accent: {
		green: string; // CTA, highlight or link color
		yellow: string; // Warning or attention markers
		red: string; // Error or delete
	};

	success: string; // Success state or alerts
	warning: string; // Warning or caution states
	error: string; // Error or validation failures
	info: string; // Informational message

	overlay: string; // Overlay for modals/backdrop. (e.g. rgba)
	transparent: string; // fully transparent, used for reset
};

/**
 * ThemeSemanticColors is *context-based* or *purpose-based*
 * UI Component should always used ThemeSemanticColors
 * Instead of what they like, it means *what they are used for*
 */

type ThemeSemanticColors = {
	text: {
		/**
		 * Default color for test (e.g. body text)
		 * Should have high contrast with default background color
		 */
		primary: string;

		/**
		 * Used for secondary text. e.g., subtitles, meta text, labels
		 * Slightly lower contrast than primary color
		 */
		secondary: string;

		/**
		 * For inactive, placeholder or hint text
		 * Typically lighter or dimmed gray
		 */
		muted: string;

		/**
		 * Text used for dark/inverted background
		 */
		inverted: string;

		/**
		 * For link, interactive text for ex. buttons, CTAs
		 * Should have hight visual prominnence
		 */
		link: string;

		/**
		 * Text used for error messages or destructive states
		 */
		danger: string;

		/**
		 * Text used for communicates successfule actions or states
		 */
		success: string;
	};
	background: {
		/**
		 * Main background colors. Used for full-page, default containers
		 */
		default: string;

		/**
		 * used for raised surfaces. for ex. cards, modals, or app bars
		 */
		elevated: string;

		/**
		 * For inputs, muted container, toggles etc
		 */
		subtle: string;

		/**
		 * Background color for darkmode/inverted theme
		 */
		inverted: string;
	};
	border: {
		/**
		 * standard border color. ex. contaienrs, input
		 */
		default: string;

		/**
		 * lighter borders for less emphasis. For ex. card edges, dividers
		 */
		muted: string;

		/**
		 * Strong borders for emphasis. For ex. Focused states, alerts
		 */
		strong: string;
	};
};

// LIGHT theme
const lightBaseColors: ThemeColors = {
	white: "#FFFFFF",
	black: "#000000",

	gray: {
		50: "#F9FAFB",
		100: "#F0F0F0",
		200: "#D9D9D9",
		300: "#BFBFBF",
		400: "#A6A6A6",
		500: "#8C8C8C",
		600: "#737373",
		700: "#595959",
		800: "#404040",
		900: "#262626",
	},

	primary: {
		default: "#000000",
		contrast: "#FFFFFF",
	},

	accent: {
		green: "#00FF84",
		red: "#FF4D6D",
		yellow: "#FFE066",
	},

	success: "#28C76F",
	warning: "#FF9F43",
	error: "#EA5455",
	info: "#00CFE8",

	overlay: "rgba(0, 0, 0, 0.5)",
	transparent: "transparent",
};

const lightSemanticColors: ThemeSemanticColors = {
	text: {
		primary: lightBaseColors.gray[900],
		secondary: lightBaseColors.gray[700],
		muted: lightBaseColors.gray[500],
		inverted: lightBaseColors.white,
		link: lightBaseColors.accent.green,
		danger: lightBaseColors.error,
		success: lightBaseColors.success,
	},
	background: {
		default: lightBaseColors.white,
		elevated: lightBaseColors.gray[50],
		subtle: lightBaseColors.gray[100],
		inverted: lightBaseColors.gray[900],
	},
	border: {
		default: lightBaseColors.gray[200],
		muted: lightBaseColors.gray[100],
		strong: lightBaseColors.gray[400],
	},
};

// DARK theme
const darkBaseColors: ThemeColors = {
	...lightBaseColors,
	white: "#000000",
	black: "#FFFFFF",
	gray: {
		50: "#121212",
		100: "#1E1E1E",
		200: "#2C2C2C",
		300: "#3A3A3A",
		400: "#505050",
		500: "#6B6B6B",
		600: "#8C8C8C",
		700: "#B3B3B3",
		800: "#D6D6D6",
		900: "#F0F0F0",
	},
	accent: {
		...lightBaseColors.accent,
		green: "#00FFA3",
	},
	overlay: "rgba(255,255,255,0.3)",
};

const darkSemanticColors: ThemeSemanticColors = {
	text: {
		primary: darkBaseColors.gray[50],
		secondary: darkBaseColors.gray[300],
		muted: darkBaseColors.gray[500],
		inverted: darkBaseColors.black,
		link: darkBaseColors.accent.green,
		danger: darkBaseColors.error,
		success: darkBaseColors.success,
	},
	background: {
		default: darkBaseColors.gray[900],
		elevated: darkBaseColors.gray[800],
		subtle: darkBaseColors.gray[700],
		inverted: darkBaseColors.white,
	},
	border: {
		default: darkBaseColors.gray[600],
		muted: darkBaseColors.gray[700],
		strong: darkBaseColors.gray[400],
	},
};

// ---------------------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------------------

type Typography = {
	fonts: {
		[key in "body" | "heading" | "mono"]: string;
	};
	fontSizes: {
		[key in "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl"]: string;
	};
	fontWeights: {
		[key in "light" | "normal" | "medium" | "bold"]: number;
	};
	lineHeights: {
		[key in "normal" | "relaxed" | "loose"]: number;
	};
	letterSpacing: {
		[key in "normal" | "wide" | "wider"]: string;
	};
};

const typography: Typography = {
	fonts: {
		body: '"Helvetica Neue", sans-serif',
		heading: '"Helvetica Neue", sans-serif',
		mono: '"Courier New", monospace',
	},
	fontSizes: {
		xs: "0.75rem", // 12px
		sm: "0.875rem", // 14px
		base: "1rem", // 16px
		md: "1.125rem", // 18px
		lg: "1.25rem", // 20px
		xl: "1.5rem", // 24px
		"2xl": "2rem", // 32px
		"3xl": "3rem", // 48px
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		bold: 700,
	},
	lineHeights: {
		normal: 1.5,
		relaxed: 1.625,
		loose: 2,
	},
	letterSpacing: {
		normal: "0",
		wide: "0.05em",
		wider: "0.1em",
	},
};

// ---------------------------------------------------------------------------------------
// Spacing, Radii, Breakpoints
// Spacing is based on 8px spacing
// ---------------------------------------------------------------------------------------

type Space = {
	// TODO: (maaahad) Define a generic type. Ref: https://catchts.com/range-number:wa
	[key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24]: string;
};

type Radii = {
	[key in "none" | "sm" | "md" | "lg" | "xl" | "full"]: string;
};

type Breakpoints = {
	[key in "sm" | "md" | "lg" | "xl" | "2xl"]: string;
};

const space: Space = {
	0: "0px",
	1: "4px",
	2: "8px",
	3: "12px",
	4: "16px",
	5: "20px",
	6: "24px",
	8: "32px",
	10: "40px",
	12: "48px",
	16: "64px",
	20: "80px",
	24: "96px",
};

const radii: Radii = {
	none: "0",
	sm: "4px",
	md: "8px",
	lg: "12px",
	xl: "16px",
	full: "9999px",
};

const breakpoints = {
	sm: "480px",
	md: "768px",
	lg: "1024px",
	xl: "1280px",
	"2xl": "1536px",
};

// ---------------------------------------------------------------------------------------
// Shadows, transitions, Z-index
// ---------------------------------------------------------------------------------------

type Shadows = {
	[key in "xs" | "sm" | "md" | "lg" | "xl"]: string;
};

type Transitions = {
	[key in "fast" | "normal" | "slow"]: string;
};

type ZIndices = {
	[key in
	| "base"
	| "dropdown"
	| "sticky"
	| "overlay"
	| "modal"
	| "toast"
	| "tooltip"]: number;
};

const shadows: Shadows = {
	xs: "0 1px 2px rgba(0,0,0,0.05)",
	sm: "0 2px 4px rgba(0,0,0,0.1)",
	md: "0 4px 8px rgba(0,0,0,0.15)",
	lg: "0 8px 16px rgba(0,0,0,0.2)",
	xl: "0 16px 24px rgba(0,0,0,0.25)",
};

const transitions: Transitions = {
	fast: "150ms ease-in-out",
	normal: "300ms ease-in-out",
	slow: "500ms ease-in-out",
};

const zIndices: ZIndices = {
	base: 0,
	dropdown: 10,
	sticky: 20,
	overlay: 30,
	modal: 40,
	toast: 50,
	tooltip: 60,
};
