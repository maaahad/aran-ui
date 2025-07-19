import styled, { css, type DefaultTheme } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type {
	ComponentResponsiveProps,
	Size,
	Variant,
} from "../../utils/types";

/**
 *
| Variant    | Typical Use                          | Appearance                                         |
| ---------- | ------------------------------------ | -------------------------------------------------- |
| `Solid`    | Primary action                       | High contrast bg, inverted text (e.g. black/white) |
| `Filled`   | Secondary/neutral action             | Soft background, normal text color                 |
| `Outlined` | Tertiary or neutral emphasis         | Transparent bg, defined border                     |
| `Ghost`    | Inline button, minimal visual weight | Transparent all, subtle hover only                 |
| `Plain`    | Navigate or inline text action       | Styled like a link, often underlined               |


| **Variant**  | **Background**                              | **Border**                 | **Text Color**          | **Hover Styles**                                     | **Spinner Color** | **Disabled Style**                      |
| ------------ | ------------------------------------------- | -------------------------- | ----------------------- | ---------------------------------------------------- | ----------------- | --------------------------------------- |
| **Solid**    | `background.inverted` (e.g. black or brand) | none                       | `text.inverted` (white) | darken bg slightly (e.g. `hover:bg-neutral-900`)     | `text.inverted`   | opacity `0.6`, `cursor: not-allowed`    |
| **Filled**   | `background.subtle` (e.g. light gray)       | none                       | `text.primary`          | darken bg slightly (`hover:bg-neutral-300`)          | `text.primary`    | reduce contrast, `opacity: 0.6`         |
| **Outlined** | transparent                                 | `1px solid border.default` | `text.primary`          | bg: `background.hover` (e.g. `hover:bg-neutral-100`) | `text.primary`    | fade border and text                    |
| **Ghost**    | transparent                                 | none                       | `text.primary`          | subtle bg on hover (e.g. `hover:bg-neutral-100`)     | `text.primary`    | text muted, no pointer                  |
| **Plain**    | transparent                                 | none                       | `accent.default`        | underline or opacity change (e.g. `hover:underline`) | `accent.default`  | text gray, no underline, `opacity: 0.5` |

*/

type Props = Omit<ComponentResponsiveProps, "pd"> & {
	reverse: boolean;
	size: Size;
	variant: Variant;
	disabled: boolean;
	loading: boolean;
};

const applySizeStyles = (theme: DefaultTheme, size: Size) => {
	switch (size) {
		case "xs": {
			return css`
				height: ${theme.space[6]}; 
        min-width: ${theme.space[16]}; 
				padding: ${theme.space[1]} ${theme.space[2]}; 
				border-radius: ${theme.radii.sm}; 
				gap: ${theme.space[1]};
        font-size: ${theme.typography.fontSizes.xs}; 
			`;
		}
		case "sm": {
			return css`
				height: ${theme.space[8]}; 
        min-width: ${theme.space[20]}; 
        /* TODO: (maaahad) 1.5 */
				padding: ${theme.space[1]} ${theme.space[3]}; 
				border-radius: ${theme.radii.sm}; 
				gap: ${theme.space[1]};
        font-size: ${theme.typography.fontSizes.sm}; 
			`;
		}
		case "md": {
			return css`
				height: ${theme.space[10]}; 
        min-width: ${theme.space[24]}; 
				padding: ${theme.space[2]} ${theme.space[4]}; 
				border-radius: ${theme.radii.md}; 
				gap: ${theme.space[2]};
        font-size: ${theme.typography.fontSizes.base}; 
			`;
		}
		case "lg": {
			return css`
				height: ${theme.space[12]}; 
        min-width: ${theme.space[28]}; 
				padding: ${theme.space[3]} ${theme.space[5]}; 
				border-radius: ${theme.radii.md}; 
				gap: ${theme.space[2]};
        font-size: ${theme.typography.fontSizes.md}; 
			`;
		}
		case "xl": {
			return css`
				height: ${theme.space[13]}; 
        min-width: ${theme.space[28]}; 
				padding: ${theme.space[4]} ${theme.space[6]}; 
				border-radius: ${theme.radii.lg}; 
				gap: ${theme.space[3]};
        font-size: ${theme.typography.fontSizes.lg}; 
			`;
		}
	}
};

const applyVariantStyles = (
	theme: DefaultTheme,
	variant: Variant,
	disabled: boolean,
	loading: boolean,
) => {
	switch (variant) {
		case "solid": {
			return css`
				border: none; 
				color: ${theme.colors.semantic.text.inverted}; 
				background-color: ${theme.colors.semantic.background.inverted}; 

				&:hover {
					${
						!loading &&
						!disabled &&
						css`
          background-color: ${theme.colors.semantic.background.invertedHover}; 
					`
					}
				}

				${
					disabled &&
					css`
          color: ${theme.colors.semantic.text.muted}; 
					cursor: not-allowed; 
					opacity: .6; 
				`
				}
			`;
		}

		case "filled": {
			return css`
				border: none; 
				color: ${theme.colors.semantic.text.primary}; 
				background-color: ${theme.colors.semantic.background.subtle}; 

				&:hover {
					${
						!loading &&
						!disabled &&
						css`
          background-color: ${theme.colors.semantic.background.subtleHover}; 
					`
					}
				}

				${
					disabled &&
					css`
          color: ${theme.colors.semantic.text.muted}; 
					cursor: not-allowed; 
					opacity: .6; 
				`
				}
			`;
		}

		case "outlined": {
			return css`
        background-color: ${theme.colors.semantic.background.transparent}; 
        color: ${theme.colors.semantic.text.primary}; 
        border: 1px solid ${theme.colors.semantic.border.default}; 

        &:hover {
          ${
						!loading &&
						!disabled &&
						css`
          background-color: ${theme.colors.semantic.background.hover}; 
          `
					}
        }

        ${
					disabled &&
					css`
          border-color: ${theme.colors.semantic.border.muted}; 
          color: ${theme.colors.semantic.text.muted}; 
          cursor: not-allowed; 
        `
				}
      `;
		}

		case "ghost": {
			return css`
        background-color: ${theme.colors.semantic.background.transparent}; 
        color: ${theme.colors.semantic.text.primary}; 
        border: none; 

        &:hover {
          ${
						!loading &&
						!disabled &&
						css`
          background-color: ${theme.colors.semantic.background.hover};
          `
					}
        }

        ${
					disabled &&
					css`
        background-color: ${theme.colors.semantic.background.subtle};
        color: ${theme.colors.semantic.text.muted};
        cursor: not-allowed; 
        `
				}
      `;
		}

		case "plain": {
			return css`
        background-color: ${theme.colors.semantic.background.transparent}; 
        color: ${theme.colors.semantic.text.link}; 
        border: none; 

        &:hover {
          ${
						!loading &&
						!disabled &&
						css`
          text-decoration: underline; 
          `
					}
        }

        ${
					disabled &&
					css`
        color: ${theme.colors.semantic.text.muted};
        cursor: not-allowed; 
        opacity: .5; 
        `
				}
      `;
		}

		default:
			css``;
	}
};

export const ButtonStyled = styled.button<Props>`
	${applyResponsiveCSS}
	${({ theme, reverse, size, variant, disabled, loading }) => css`
		position: relative; 
		overflow: hidden; 
		cursor: pointer; 
		display: flex; 
		flex-direction: ${reverse ? "row-reverse" : "row"}; 
		align-items: center; 
    justify-content: center; 

		transition: ${theme.transitions.normal}; 

    ${
			loading &&
			css`
    cursor: not-allowed; 
    `
		}

		${applySizeStyles(theme, size)}; 
		${applyVariantStyles(theme, variant, disabled, loading)}; 
	`}

`;
