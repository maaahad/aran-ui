import styled, { css } from "styled-components";

export type From = "left" | "right" | "top" | "bottom";

// TODO: use number instead
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

// TODO: remove this util, instead use the js inside styled component directly
const applyContainerStyle = (
	open: boolean,
	from: From,
	anchorElBottom: number,
) => {
	switch (from) {
		case "left": {
			return css`
        top: ${anchorElBottom}px;
        left: ${open ? 0 : "-100%"}; 
        right: 0;
        bottom: 0;
        flex-direction: row;
    `;
		}

		case "right": {
			return css`
        top: ${anchorElBottom}px;
        right: ${open ? 0 : "-100%"}; 
        left: 0; 
        bottom: 0;
        flex-direction: row-reverse;
    `;
		}

		case "top": {
			return css`
        top: ${open ? 0 : "-100%"}; 
        right: 0;
        left: 0;
        flex-direction: column;
    `;
		}

		case "bottom": {
			return css`
        bottom: ${open ? 0 : "-100%"}; 
        right: 0;
        left: 0;
        flex-direction: column-reverse;
    `;
		}
	}
};

export const DrawerContainer = styled.div<{
	from: From;
	zIndex: number;
	open: boolean;
	anchorElBottom: number;
}>`
  ${({ from, zIndex, open, anchorElBottom }) => css`
    display: flex; 
    position: fixed; 
    /* TODO: transition should come from theme */
    transition: all 200ms ease;
    z-index: ${zIndex};
    ${applyContainerStyle(open, from, anchorElBottom)}
  `}
`;

export const DrawerContent = styled.div<{ from: From }>`
  background-color: white; 
  // TODO: padding should come from theme, should be synched with PageContainer
  padding: 16px; 
  ${({ from }) => {
		switch (from) {
			case "left":
			case "right": {
				return css`
          width: ${CONFIG[from].size};
      `;
			}
			case "top":
			case "bottom": {
				return css`
          height: ${CONFIG[from].size};
      `;
			}
		}
	}}
`;

export const EmptyContent = styled.div<{ from: From }>`
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
