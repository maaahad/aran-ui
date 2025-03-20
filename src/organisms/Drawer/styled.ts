import styled, { css } from "styled-components";

export const DrawerContainer = styled.div<{
	open?: boolean;
	top: number;
	from?: "left" | "right" | "top" | "bottom";
	position: {
		[key in "top" | "bottom" | "left" | "right"]?: number;
	};
}>`
  ${({ open = false, top, from = "left", position }) => css`
    width: 200px; 
    background-color: white; 
    position: fixed; 
    top: ${position?.top}px;
    bottom: ${position?.bottom}px;
    ${from}: ${position?.[from]}px; 
    /* top: ${top}px; */
    /* bottom: 0; */
    /* left: ${open ? "0" : "-200px"}; */
    background-color: #cbcbcb; 
    /* TODO: transition should come from theme */
    transition: all 200ms ease; 
  `}
`;

//   ${
// 	from === "left" &&
// 	css`
//   left: ${position?.left}px;
//   `
// }
//   ${
// 	from === "right" &&
// 	css`
//   right: ${position?.right}px;
//   `
// }
