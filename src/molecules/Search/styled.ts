import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

export const SearchContainer = styled.div<Omit<ComponentResponsiveProps, "pd">>`
${applyResponsiveCSS}; 
display: flex; 
flex-direction: row; 
align-items: center; 

.inputContainer {
width: 100%; 
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
`;

//TODO: (maaahad) padding 8px around input,
// FIXME: (maaahad) should come from config
export const StyledInput = styled.input`
${({ theme }) => css`
border: none; 
padding: 8px 32px 8px 32px; 
width: 100%; 
background-color: #cbcbcb; 
`}
`;
