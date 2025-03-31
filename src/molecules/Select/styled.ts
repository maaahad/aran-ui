import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ResponsiveProps } from "../../utils/types";

export const SelectContainer = styled.div<ResponsiveProps>`
${applyResponsiveCSS}
  display: flex; 
  flex-direction: column; 
  /* TODO: gap should come from theme */
  gap: 8px; 
`;

// TODO: font related props value should come from theme
export const FormLabel = styled.div`
  font-size : 14px; 
  font-weight: 600; 
  line-height: 16px; 
`;

// TODO: implement Button with icon option at the same some
// TODO: css for diffrent size, width
export const Button = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    cursor: pointer;
    /* TODO: default height (md) */
    height: 40px;
    border: 1px solid ${theme.color.line}; 
    border-radius: 8px;
    /* TODO: padding should be come from theme */
    padding: 8px 12px;
    display: inline-flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
    gap: 8px; 
    outline: none; 
  `}
`;

export const DropdownContainer = styled.div<
	Pick<ResponsiveProps, "width"> & {
		top: number;
		left: number;
		width: number;
	}
>`
${applyResponsiveCSS}
  ${({ theme, top, left }) => css`
    position: fixed; 
    top: ${top}px; 
    left: ${left}px; 
    /* TODO: (maaahad) max-height should come from config */
    max-height: 250px; 
    overflow: auto; 
    border: 1px solid ${theme.color.line}; 

    /* TODO: (maaahad) border radius should come from theme */
    border-radius: 8px;
    /* TODO: (maaahad) padding should come from theme, + more padding should ve added to dropdown optin aling with it's background color */
    padding: 8px; 
  `}
`;
