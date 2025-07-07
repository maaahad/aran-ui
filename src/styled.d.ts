// import original module decleartion
import "styled-components";
import type { ThemeMode } from "./tokens/color";

// extending styled-components
declare module "styled-components" {
	export type ColorShades = {
		[key: number]: string; // Numeric scale: e.g., gray[100], gray[200]
	};

	/**
	 * ThemeSemanticColors is *context-based* or *purpose-based*
	 * UI Component should always used ThemeSemanticColors
	 * Instead of what they like, it means *what they are used for*
	 */

	export type ThemeSemanticColors = {
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

	export type Typography = {
		fonts: {
			[key in "body" | "heading" | "mono"]: string;
		};
		fontSizes: {
			[key in
				| "xs"
				| "sm"
				| "base"
				| "md"
				| "lg"
				| "xl"
				| "2xl"
				| "3xl"]: string;
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

	export type Space = {
		// TODO: (maaahad) Define a generic type. Ref: https://catchts.com/range-number:wa
		[key in 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24]: string;
	};

	export type Radii = {
		[key in "none" | "sm" | "md" | "lg" | "xl" | "full"]: string;
	};

	export type Breakpoints = {
		[key in "sm" | "md" | "lg" | "xl" | "2xl"]: string;
	};

	export type Shadows = {
		[key in "xs" | "sm" | "md" | "lg" | "xl"]: string;
	};

	export type Transitions = {
		[key in "fast" | "normal" | "slow"]: string;
	};

	export type ZIndices = {
		[key in
			| "base"
			| "dropdown"
			| "sticky"
			| "overlay"
			| "modal"
			| "toast"
			| "tooltip"]: number;
	};

	export interface DefaultTheme {
		color: {
			mode: ThemeMode;
			text: {
				primary: string;
				secondary: string;
				disabled: string;
			};
			accent: {
				primary: string;
				secondary: string;
			};
			line: string;
			background: {
				primary: string;
				secondary: string;
			};
			icon: {
				primary: string;
				secondary: string;
				disabled: string;
			};
			overlay: {
				primary: string;
				secondary: string;
				tertiary: string;
			};
			themeless: {
				primary: string;
				secondary: string;
			};
		};
		breakpoints: {
			keys: string[]; // TODO: (maaahad) replace with TupleType
			values: {
				[Property in "xs" | "sm" | "md" | "lg" | "xl"]: number;
			};
		};
		borderRadius: {
			[Property in "xs" | "sm" | "md" | "lg" | "xl"]: `${number}px`;
		};
		//  borderRadius, transition, font, size, zIndex, ... ...
		elevation: {
			[Property in "sm" | "md" | "lg"]: string;
		};
	}
}
