import styled, { css, type DefaultTheme } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps, Size } from "../../utils/types";

type Props = Omit<ComponentResponsiveProps, "pd"> & {
	reverse: boolean;
	size: Size;
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

export const ButtonStyled = styled.button<Props>`
	${applyResponsiveCSS}
	${({ theme, reverse, size }) => css`
		position: relative; 
		overflow: hidden; 
		cursor: pointer; 
		display: flex; 
		flex-direction: ${reverse ? "row-reverse" : "row"}; 
		align-items: center; 

		${applySizeStyles(theme, size)}; 

		border: none; 
		background-color: ${theme.colors.semantic.background.inverted}; 
		color: ${theme.colors.semantic.text.inverted}; 
	`}

`;
