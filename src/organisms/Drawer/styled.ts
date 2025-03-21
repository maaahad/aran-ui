import styled, { css } from "styled-components";

export type From = "left" | "right" | "top" | "bottom";
export type Position = {
	[key in From]?: number;
};

// TODO: (maaahad) sync NEGATIVE_OFFSET height in case of top and bottom
const positionToCSS = (from: From, position: Position) => {
	// TODO: (maaahad) fix width and height,
	switch (from) {
		case "left": {
			return css`
        top: ${position.top}px;
        left: ${position.left}px;
        bottom: 0; 
        /* TODO: from theme or config */
        width: 200px;
    `;
		}

		case "right": {
			return css`
        top: ${position.top}px;
        right: ${position.right}px;
        bottom: 0;
        /* TODO: from theme or config */
        width: 200px;
    `;
		}

		case "top": {
			return css`
        top: ${position.top}px;
        right: 0;
        left: 0;
        /* TODO: from theme or config */
        height: 200px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    `;
		}

		case "bottom": {
			return css`
        bottom: ${position.bottom}px;
        right: 0;
        left: 0;
        /* TODO: from theme or config */
        height: 200px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    `;
		}
	}
};

export const DrawerContainer = styled.div<{
	from: From;
	position: Position;
	zIndex: number;
}>`
  ${({ from, zIndex, position }) => css`
    background-color: white; 
    position: fixed; 
    background-color: #cbcbcb; 
    /* TODO: transition should come from theme */
    transition: all 200ms ease;
    z-index: ${zIndex};
    ${positionToCSS(from, position)}
  `}
`;
