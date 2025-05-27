import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

//FIXME: (maaahad) all abslute value should come from config. for ex. padding, width, height etc
// FIXME: (maaahad) add border radius in theme and used instead of hardcoded value
// NOTE: (maaahad) height comes from config based on size prop
export const SearchInputContainer = styled.div<
	Omit<ComponentResponsiveProps, "pd"> & { withDropdown: boolean }
>`
${applyResponsiveCSS}; 

${({ theme, withDropdown }) => css`
height: 32px;
display: flex; 
flex-direction: row; 
align-items: center; 

.inputContainer {
	height: 100%; 
	flex: 1; 
	position: relative; 
	display: flex; 
	flex-direction: row; 
	align-items: center; 
}

.inputContainer > .searchIcon {
	position: absolute; 
	left: 8px; 
}

.inputContainer > .closeIcon {
	position: absolute; 
	right: 8px; 
}

.searchSelectContainer {
	height: 100%;  
	width: 48px; 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${theme.color.line};
	border-right: 1px solid transparent; 
	border-top-left-radius: ${theme.borderRadius.sm}; 
	${
		!withDropdown &&
		css`
	border-bottom-left-radius: ${theme.borderRadius.sm}; 
	`
	}
}

.searchSelectContainer:focus{
	border-right: 1px solid ${theme.color.line};
	border-color: ${theme.color.accent.secondary}; 
}

.searchIconContainer {
	cursor: pointer; 
	height: 100%; 
	width: 32px;
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${theme.color.line};
	border-left: 1px solid transparent; 
	border-top-right-radius: ${theme.borderRadius.sm};
	${
		!withDropdown &&
		css`
	border-bottom-right-radius: ${theme.borderRadius.sm}; 
	`
	}

}

.searchIconContainer:focus{
	border-left: 1px solid ${theme.color.line};
	border-color: ${theme.color.accent.secondary}; 
}

.searchIconContainer:hover {
	background-color: ${theme.color.background.secondary}; 
}
`}
`;

//TODO: (maaahad) padding 8px around input,
// FIXME: (maaahad) should come from config
// TODO: (maaahad) do proper calculation of padding !!!!
export const StyledInput = styled.input<{
	withSearchSelect: boolean;
	withSearchResult: boolean;
}>`
${({ theme, withSearchSelect, withSearchResult }) => css`
height: 100%; 
border: none; 
padding: 8px 32px 8px 32px; 
flex: 1; 
outline: none; 
border: 1px solid ${theme.color.line};

${
	!withSearchSelect &&
	css`
border-radius: ${theme.borderRadius.sm}; 
`
}

${
	withSearchResult &&
	css`
border-bottom-left-radius: 0; 
border-bottom-right-radius: 0; 
`
}

&:focus{
	border-color: ${theme.color.accent.secondary}; 
}

&.withSearchSelect {
	padding-left: 16px; 
}
`}
`;

export const DropdownContainer = styled.div<{ open: boolean }>`
${({ theme, open }) => css`
max-height: 0; 
overflow: hidden; 
${
	open &&
	css`
background-color: ${theme.color.background.primary}; 
border: 1px solid ${theme.color.line}; 
border-top: none; 
border-bottom-right-radius: ${theme.borderRadius.sm}; 
border-bottom-left-radius: ${theme.borderRadius.sm}; 
padding: 8px;
display: flex; 
flex-direction: column; 
gap: 4px; 
max-height: 200px;  
box-shadow: ${theme.elevation.sm}; 
`
}
`}
`;

export const StateStyled = styled.div`
height: 100%; 
display: flex; 
align-items: center; 
justify-content: center;
`;

export const DropdownItemStyled = styled.button<{ clickable: boolean }>`
${({ theme, clickable }) => css`
padding: 8px;
border: none; 
background-color: transparent; 
display: flex; 
justify-content: flex-start; 
&:hover {
	${
		clickable &&
		css`
	cursor: pointer; 
	background-color: ${theme.color.background.secondary}; 
`
	}
}
`}
`;
