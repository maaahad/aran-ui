import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ResponsiveProps } from "../../utils/types";

export const SelectContainer = styled.div<ResponsiveProps>`
  ${applyResponsiveCSS}
  ${() => css`
    display: flex; 
    flex-direction: column; 
    gap: 8px; 
  `}
`;

// TODO: font related props value should come from theme, and we Can have a Separate FormLabel component
export const FormLabel = styled.div`
font-size : 14px; 
  font-weight: 600; 
line-height: 16px; 
`;

// TODO: implement Button with icon option
// TODO: css for diffrent size, width
// Ref : box-shadow: 0 0 0 1px #fff,  0 0 0 3px #1f75cb ;
export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%; 
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
    outline: 2px solid transparent; 
    &:focus{
      box-shadow: 0 0 0 1px ${theme.color.themeless.primary}, 0 0 0 2px ${theme.color.accent.secondary}; 
    }
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
    /* TODO: padding should be come from theme */
    padding: 12px 12px;

    display: flex; 
    flex-direction: column; 
    /* TODO: (maaahad) gap should come from theme */
    gap: 8px; 
  `}
`;

export const OptionContainer = styled.div`
  ${({ theme }) => css`
    cursor: pointer; 
    display: flex; 
    flex-direction: row; 
    align-items: center; 
    justify-content: space-between; 
    /* TODO: gap, border-radius and padding should come from theme */
    gap: 8px;
    padding:  8px;
    border-radius: 4px; 
    &:hover {
      background-color: ${theme.color.background.secondary}; 
    }
    transition: all .2s ease-in; 
  `}
`;

export const Slot = styled.div`
  display: flex;
  flex-direction: row;
  /* TODO: (maaahad) gap should come from theme */
  gap: 8px; 
`;

export const Span = styled.span<{ isPlaceholder: boolean }>`
${({ isPlaceholder, theme }) =>
	isPlaceholder &&
	css`
color: ${theme.color.text.secondary};
`}
`;
