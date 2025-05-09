import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

//FIXME: (maaahad) all abslute value should come from config. for ex. padding, width, height etc
// FIXME: (maaahad) add border radius in theme and used instead of hardcoded value
// NOTE: (maaahad) height comes from config based on size prop
export const SearchContainer = styled.div<Omit<ComponentResponsiveProps, "pd">>`
${applyResponsiveCSS}; 

${({ theme }) => css`
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
	border-right: none; 
	border-top-left-radius: 4px; 
	border-bottom-left-radius: 4px; 
}

.searchInputContainer {
	height: 100%; 
	width: 32px;
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${theme.color.line};
	border-left: none; 
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
}
`}
`;

//TODO: (maaahad) padding 8px around input,
// FIXME: (maaahad) should come from config
// TODO: (maaahad) do proper calculation of padding !!!!
export const StyledInput = styled.input`
${({ theme }) => css`
height: 100%; 
border: none; 
padding: 8px 32px 8px 32px; 
flex: 1; 
outline: none; 
border: 1px solid ${theme.color.line};

&.withSearchSelect {
	padding-left: 16px; 
}
`}
`;
