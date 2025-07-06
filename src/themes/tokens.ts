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

const themeColors: ThemeColors = {
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
