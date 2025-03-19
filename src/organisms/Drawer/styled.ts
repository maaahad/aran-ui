import styled, { css } from "styled-components";

export const DrawerContainer = styled.div<{
	open?: boolean;
	top: number;
}>`
  ${({ open = false, top }) => css`
    width: 200px; 
    background-color: white; 
    position: fixed; 
    top: ${top}px; 
    bottom: 0; 
    left: ${open ? "0" : "-200px"}; 
    background-color: #cbcbcb; 
    /* TODO: add animation when open */
  `}
`;
