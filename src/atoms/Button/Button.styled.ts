import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

type Props = Omit<ComponentResponsiveProps, "pd"> & {
	reverse: boolean;
};
export const ButtonStyled = styled.button<Props>`
	${applyResponsiveCSS}
	${({ theme, reverse }) => css`
		display: flex; 
		flex-direction: ${reverse ? "row-reverse" : "row"}; 
		align-items: center; 
		gap: 4px; 
		padding: 4px; 
	`}

`;
