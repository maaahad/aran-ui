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
		display: flex; 
		flex-direction: ${reverse ? "row-reverse" : "row"}; 
		align-items: center; 
		gap: 4px; 
		padding: 4px; 

		height: ${SIZE_STYLES_CONFIG[size].height}; 
		padding: ${SIZE_STYLES_CONFIG[size].padding}; 
		border-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	`}

`;
