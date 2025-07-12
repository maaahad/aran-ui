import styled, { css, type DefaultTheme } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type {
	ComponentResponsiveProps,
	Size,
	Variant,
} from "../../utils/types";

type Props = Omit<ComponentResponsiveProps, "pd"> & {
	reverse: boolean;
	size: Size;
	variant: Variant;
	disabled: boolean;
};

const applySizeStyles = (theme: DefaultTheme, size: Size) => {
	switch (size) {
		case "xs": {
			return css`
				height: ${theme.space[7]}; 
				padding: ${theme.space[1]} ${theme.space[2]}; 
				border-radius: ${theme.radii.sm}; 
				gap: ${theme.space[1]};
			`;
		}
		case "sm": {
			return css`
				height: ${theme.space[8]}; 
				padding: ${theme.space[1]} ${theme.space[3]}; 
				border-radius: ${theme.radii.sm}; 
				gap: ${theme.space[1]};
			`;
		}
		case "md": {
			return css`
				height: ${theme.space[10]}; 
				padding: ${theme.space[2]} ${theme.space[4]}; 
				border-radius: ${theme.radii.md}; 
				gap: ${theme.space[2]};
			`;
		}
		case "lg": {
			return css`
				height: ${theme.space[12]}; 
				padding: ${theme.space[2]} ${theme.space[5]}; 
				border-radius: ${theme.radii.md}; 
				gap: ${theme.space[2]};
			`;
		}
		case "xl": {
			return css`
				height: ${theme.space[13]}; 
				padding: ${theme.space[3]} ${theme.space[6]}; 
				border-radius: ${theme.radii.lg}; 
				gap: ${theme.space[3]};
			`;
		}
	}
};

// TODO: (maaahad) padding, border-radius, and typography should be handled in size related styling

const applyVariantStyles = (
	theme: DefaultTheme,
	variant: Variant,
	disabled: boolean,
) => {
	switch (variant) {
		case "filled": {
			return css`
				border: none; 
				color: ${theme.colors.semantic.text.inverted}; 
				background-color: ${theme.colors.semantic.background.inverted}; 

				&:hover {
					${
						!disabled &&
						css`
          background-color: ${theme.colors.raw.gray[800]}; 
					`
					}
				}

				${
					disabled &&
					css`
          background-color: ${theme.colors.raw.gray[300]}; 
          color: ${theme.colors.semantic.text.muted}; 
					cursor: not-allowed; 
					opacity: .6; 
				`
				}
			`;
		}

		case "outlined": {
			return css`
        background-color: ${theme.colors.raw.transparent}; 
        color: ${theme.colors.semantic.text.primary}; 
        border: 1px solid ${theme.colors.semantic.border.default}; 

        &:hover {
          ${
						!disabled &&
						css`
          background-color: ${theme.colors.semantic.background.subtle}; 
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

		default:
			css``;
	}
};

export const ButtonStyled = styled.button<Props>`
	${applyResponsiveCSS}
	${({ theme, reverse, size, variant, disabled }) => css`
		position: relative; 
		overflow: hidden; 
		cursor: pointer; 
		display: flex; 
		flex-direction: ${reverse ? "row-reverse" : "row"}; 
		align-items: center; 

		transition: ${theme.transitions.normal}; 

		${applySizeStyles(theme, size)}; 
		${applyVariantStyles(theme, variant, disabled)}; 
	`}

`;
