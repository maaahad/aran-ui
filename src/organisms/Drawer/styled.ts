import styled, { css } from "styled-components";

export type From = "left" | "right" | "top" | "bottom";
export type Position = {
	[key in From]?: `${number}px` | `${number}%`;
};

const CONFIG: {
	[key in From]: {
		size: `${number}px`;
	};
} = {
	left: {
		size: "240px",
	},
	right: {
		size: "240px",
	},
	top: {
		size: "440px",
	},
	bottom: {
		size: "440px",
	},
};

const positionToCSS = (from: From, position: Position) => {
	switch (from) {
		case "left": {
			return css`
        top: ${position.top};
        left: ${position.left};
        right: 0;
        bottom: 0;
        flex-direction: row;
    `;
		}

		case "right": {
			return css`
        top: ${position.top};
        right: ${position.right};
        left: 0; 
        bottom: 0;
        flex-direction: row-reverse;
    `;
		}

		case "top": {
			return css`
        top: ${position.top};
        right: 0;
        left: 0;
        flex-direction: column;
    `;
		}

		case "bottom": {
			return css`
        bottom: ${position.bottom};
        right: 0;
        left: 0;
        flex-direction: column-reverse;
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
    display: flex; 
    position: fixed; 
    /* TODO: transition should come from theme */
    transition: all 200ms ease;
    z-index: ${zIndex};
    ${positionToCSS(from, position)}
  `}
`;

export const DrawerContent = styled.div<{ from: From }>`
  background-color: white; 
  ${({ from }) => {
		switch (from) {
			case "left":
			case "right": {
				return css`
          width: ${CONFIG[from].size};
      `;
			}
			case "top": {
				return css`
          height: ${CONFIG[from].size};
          /* TODO: border radius not working??? */
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
      `;
			}
			case "bottom": {
				return css`
          height: ${CONFIG[from].size};
          /* TODO: border radius not working??? */
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
      `;
			}
		}
	}}
`;

// TODO: (maaahad) this can be a standalone component, as it will be used by more than one component
export const Backdrop = styled.div<{ from: From }>`
  // TODO: (maaahad) bg color should come from theme
  background-color: #19202499; 
  ${({ from }) => {
		switch (from) {
			case "left":
			case "right": {
				return css`
          width: calc(100vw - ${CONFIG[from].size});
      `;
			}
			case "top":
			case "bottom": {
				return css`
          height: calc(100vh - ${CONFIG[from].size});
      `;
			}
		}
	}}
`;
