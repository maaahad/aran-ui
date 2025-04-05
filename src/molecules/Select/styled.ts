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

// TODO: Add Ring later
export const Ring = styled.div`
/* TODO: (maaahad) style of Ring should come from theme */
  ${({ theme }) => css`
    width: 100%; 
    padding: 2px; 
    border: 1px solid transparent; 
    border-radius: 8px; 
    &:focus-within {
      border-color: red; 
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16),0px 0px 4px rgba(0, 0, 0, 0.16):
    }
  `}
`;

// TODO: implement Button with icon option at the same some
// TODO: css for diffrent size, width
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
