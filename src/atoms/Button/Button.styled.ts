import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

export const ButtonStyled = styled.button<Omit<ComponentResponsiveProps, "pd">>`
	${applyResponsiveCSS}
	${({ theme }) => css`
		background-color: none; 
		display: flex; 
		flex-direction: row; 
		align-items: center; 
		gap: 4px; 
	`}

`;
