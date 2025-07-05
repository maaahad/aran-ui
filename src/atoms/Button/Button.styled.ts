import styled, { css } from "styled-components";
import { SIZE_STYLES_CONFIG } from "../../config/styles";
import { applyResponsiveCSS } from "../../utils/style";
import type {
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";

type Props = Omit<ComponentResponsiveProps, "pd"> &
	Required<ComponentSize> & {
		reverse: boolean;
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

		gap: ${SIZE_STYLES_CONFIG[size].gap}; 
		height: ${SIZE_STYLES_CONFIG[size].height}; 
		padding: ${SIZE_STYLES_CONFIG[size].padding}; 
		border-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 

		// TODO: (maaahad) need ripple based on cursor position
		.ripple {
		    position: absolute;
		    top: 50%;
		    left: 50%;
		    width: 200%;
		    height: 200%;
		    background: ${theme.color.background.secondary}; 
		    transform: translate(-50%, -50%) scale(0);
		    border-radius: 50%;
		    opacity: 1;
		    pointer-events: none;
		    transition: transform 0.4s ease, opacity 0.6s ease;
		    z-index: 0;
		}

		&:hover .ripple {
		   transform: scale(2.5);
		   opacity: 0;
		}
	`}

`;
