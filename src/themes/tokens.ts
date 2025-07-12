import type {
  Breakpoints,
  Colors,
  DefaultTheme,
  Radii,
  SemanticColors,
  Shadows,
  Space,
  Transitions,
  Typography,
  ZIndices,
} from "styled-components";

// ---------------------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------------------

// LIGHT theme
export const colors: Colors = {
  /**
   * Primary Brand Colors
   * Core foundational colors that represent the J.Lindeberg brand identity
   */
  primary: {
    black: "#000000", // ⬛ Pure black - primary brand color
    white: "#FFFFFF", // ⬜ Pure white - primary brand color
    charcoal: "#2C2C2C", // ⬛ Dark charcoal - softer black alternative
  },

  /**
   * gray Gray Scale
   * Comprehensive gray scale from lightest to darkest
   * Provides full range of gray tones for semantic color assignment
   */
  gray: {
    50: "#F8F9FA", // ⬜ Lightest gray
    100: "#F1F3F4", // ⬜ Very light gray
    200: "#E8EAED", // ⬜ Light gray
    300: "#DADCE0", // ⬜ Medium-light gray
    400: "#BDC1C6", // ⬜ Medium gray
    500: "#9AA0A6", // ⬜ Mid gray
    600: "#80868B", // ⬜ Medium-dark gray
    700: "#5F6368", // ⬜ Dark gray
    800: "#3C4043", // ⬛ Very dark gray
    900: "#202124", // ⬛ Darkest gray
  },

  /**
   * Accent Colors
   * Signature colors that reflect J.Lindeberg's premium aesthetic
   * Brand-specific colors derived from their visual identity
   */
  accent: {
    moonbeam: "#F5F5F0", // ⬜ Light cream/beige - signature warm gray
    lightGrey: "#E5E5E5", // ⬜ Cool light gray - modern, clean accent
    darkBlue: "#1A365D", // 🔵 Deep navy - sophisticated, premium accent
    metallicSilver: "#C0C0C0", // ⬜ Metallic silver - modern, tech-forward accent
  },

  /**
   * Status Colors
   * Semantic colors for user feedback and system states
   * Standard colors for positive, negative, warning, and informational states
   */
  status: {
    success: "#16A34A", // 🟢 Green - positive states
    warning: "#F59E0B", // 🟡 Amber - warning states
    error: "#DC2626", // 🔴 Red - error states
    info: "#2563EB", // 🔵 Blue - informational states
  },

  /**
   * Overlay Colors
   * Base colors for overlays, backdrops, and layered elements
   * Used with opacity to create modal backdrops, disabled states, and hover effects
   */
  overlay: {
    light: "#FFFFFF", // ⬜ Light overlay - for dark backgrounds
    dark: "#000000", // ⬛ Dark overlay - for light backgrounds
    neutral: "#5F6368", // ⬜ gray overlay - balanced option
  },
} as const;

const semanticColors: SemanticColors = {
  /**
   * Text Colors
   * Hierarchical text colors for different content types and emphasis levels
   */
  text: {
    // Primary text for main content, headings, and high emphasis
    primary: colors.primary.black, // ⬛ High contrast black text

    // Secondary text for supporting content and medium emphasis
    secondary: colors.gray[700], // ⬜ Dark gray for secondary content

    // Tertiary text for subtle labels, metadata, and low emphasis
    tertiary: colors.gray[500], // ⬜ Medium gray for subtle text

    // Placeholder text for form inputs and empty states
    placeholder: colors.gray[400], // ⬜ Light gray for placeholders

    // Inverse text for dark backgrounds
    inverse: colors.primary.white, // ⬜ White text on dark backgrounds

    // Disabled text for inactive elements
    disabled: colors.gray[300], // ⬜ Very light gray for disabled state

    // Link text for interactive elements
    link: colors.primary.black, // ⬛ Black links (minimal approach)
    linkHover: colors.accent.darkBlue, // 🔵 Navy blue on hover

    // Status text colors
    success: colors.status.success, // 🟢 Green for positive messages
    warning: colors.status.warning, // 🟡 Amber for warning messages
    error: colors.status.error, // 🔴 Red for error messages
    info: colors.status.info, // 🔵 Blue for informational messages
  },

  /**
   * Background Colors
   * Layered background system for different surfaces and contexts
   */
  background: {
    // Primary background for main content areas
    primary: colors.primary.white, // ⬜ Pure white main background

    // Secondary background for sections and cards
    secondary: colors.gray[50], // ⬜ Very light gray for sections

    // Tertiary background for elevated elements
    tertiary: colors.gray[100], // ⬜ Light gray for cards

    // Inverse background for light background
    inverse: colors.primary.black, // ⬜ White text on dark backgrounds

    // Accent backgrounds for special sections
    accent: colors.accent.moonbeam, // ⬜ Warm cream for featured content

    // Dark background for contrast sections
    dark: colors.primary.black, // ⬛ Black for dark sections

    // Overlay backgrounds for modals and popups
    overlay: colors.overlay.dark, // ⬛ Dark overlay (used with opacity)
    overlayLight: colors.overlay.light, // ⬜ Light overlay (used with opacity)

    // Interactive backgrounds
    hover: colors.gray[100], // ⬜ Light gray on hover
    active: colors.gray[200], // ⬜ Medium-light gray when active

    // Status backgrounds
    success: colors.status.success, // 🟢  background (used with low opacity)
    warning: colors.status.warning, // 🟡 Warning background (used with low opacity)
    error: colors.status.error, // 🔴 Error background (used with low opacity)
    info: colors.status.info, // 🔵 Info background (used with low opacity)
  },

  /**
   * Border Colors
   * Subtle borders for component definition and content separation
   */
  border: {
    // Default border for general use
    default: colors.gray[200], // ⬜ Light gray for standard borders

    // Subtle border for minimal separation
    subtle: colors.gray[100], // ⬜ Very light gray for subtle borders

    // Strong border for emphasis and focus states
    strong: colors.gray[300], // ⬜ Medium-light gray for strong borders

    // Interactive border states
    hover: colors.gray[400], // ⬜ Medium gray on hover
    focus: colors.primary.black, // ⬛ Black for focus states

    // Status borders
    success: colors.status.success, // 🟢 Green for success states
    warning: colors.status.warning, // 🟡 Amber for warning states
    error: colors.status.error, // 🔴 Red for error states
    info: colors.status.info, // 🔵 Blue for informational states
  },

  /**
   * Interactive Colors
   * Colors for buttons, links, and interactive elements
   */
  interactive: {
    // Primary action colors
    primary: colors.primary.black, // ⬛ Black for primary actions
    primaryHover: colors.primary.charcoal, // ⬛ Dark charcoal on hover
    primaryActive: colors.gray[800], // ⬛ Very dark gray when active

    // Secondary action colors
    secondary: colors.primary.white, // ⬜ White for secondary actions
    secondaryHover: colors.gray[50], // ⬜ Very light gray on hover
    secondaryActive: colors.gray[100], // ⬜ Light gray when active

    // Tertiary action colors
    tertiary: colors.gray[500], // ⬜ Medium gray for tertiary actions
    tertiaryHover: colors.gray[600], // ⬜ Medium-dark gray on hover
    tertiaryActive: colors.gray[700], // ⬜ Dark gray when active

    // Disabled state
    disabled: colors.gray[200], // ⬜ Light gray for disabled elements
    disabledText: colors.gray[400], // ⬜ Medium-light gray for disabled text
  },

  /**
   * Surface Colors
   * Colors for different surface levels and elevations
   */
  surface: {
    // Base surface (same as primary background)
    base: colors.primary.white, // ⬜ Base white surface

    // Raised surface for cards and containers
    raised: colors.gray[50], // ⬜ Very light gray for raised elements

    // Elevated surface for modals and overlays
    elevated: colors.primary.white, // ⬜ White for elevated elements

    // Sunken surface for input fields
    sunken: colors.gray[100], // ⬜ Light gray for input backgrounds

    // Accent surface for highlighted content
    accent: colors.accent.moonbeam, // ⬜ Warm cream for accent surfaces
  },

  /**
   * Shadow Colors
   * Colors for shadows and depth effects
   */
  shadow: {
    // Light shadow for subtle depth
    light: colors.overlay.dark, // ⬛ Dark overlay for light shadows

    // Medium shadow for standard elevation
    medium: colors.overlay.dark, // ⬛ Dark overlay for medium shadows

    // Heavy shadow for high elevation
    heavy: colors.overlay.dark, // ⬛ Dark overlay for heavy shadows
  },
};

// ---------------------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------------------

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

const space: Space = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
  7: "28px",
  8: "32px",
  10: "40px",
  12: "48px",
  13: "48px",
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

const breakpoints: Breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// ---------------------------------------------------------------------------------------
// Shadows, transitions, Z-index
// ---------------------------------------------------------------------------------------

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

export const theme: DefaultTheme = {
  colors: {
    raw: colors,
    semantic: semanticColors,
  },
  typography,
  space,
  breakpoints: {
    keys: ["sm", "md", "lg", "xl", "2xl"],
    values: breakpoints,
  },
  radii,
  shadows,
  transitions,
  zIndices,
};
