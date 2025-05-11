import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

//FIXME: (maaahad) all abslute value should come from config. for ex. padding, width, height etc
// FIXME: (maaahad) add border radius in theme and used instead of hardcoded value
// NOTE: (maaahad) height comes from config based on size prop
export const SearchContainer = styled.div<
	Omit<ComponentResponsiveProps, "pd"> & { withSearchResult: boolean }
>`
${applyResponsiveCSS}; 

${({ theme, withSearchResult }) => css`
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
		!withSearchResult &&
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
		!withSearchResult &&
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

export const SearchResultsContainer = styled.div`
${({ theme }) => css`
border: 1px solid ${theme.color.line}; 
border-top: none; 
border-bottom-right-radius: ${theme.borderRadius.sm}; 
border-bottom-left-radius: ${theme.borderRadius.sm}; 
padding: 8px;

.searchResultItem {
	display: flex; 
	flex-direction: row; 
	align-items: center; 
	justify-content: space-between; 
	gap: 8px; 

	.left {
		display: flex; 
		flex-direction: row; 
		gap: 4px; 
	}

	.right {
		display: flex; 
		flex-direction: row; 
		justify-content: flex-end; 
	}
}
`}
`;

export const SearchResultItem = styled.button<{ clickable: boolean }>`
${({ theme, clickable }) => css`
width: 100%; 
height: 32px; 
background-color: transparent; 
border: none; 
display: flex; 
flex-direction: row; 
align-items: center; 
justify-content: space-between; 
gap: 8px; 

${
	clickable &&
	css`
cursor: pointer; 
&:hover {
	background-color: ${theme.color.background.secondary}; 
}
`
}


.left {
	display: flex; 
	flex-direction: row; 
	gap: 4px; 
	margin-left: 8px; 
}

.right {
	display: flex; 
	flex-direction: row; 
	justify-content: flex-end; 
	margin-right: 8px; 
	color: ${theme.color.text.secondary}; 
}
`}
`;
