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
		DEFAULT: string; // Brand primary. e.g., black
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
