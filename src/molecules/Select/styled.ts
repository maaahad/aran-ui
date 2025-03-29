import styled, { css } from "styled-components";
import type { ComponentWidth } from "../../utils/types";
import { positionPropToCSS } from "../../utils/style";

export const SelectContainer = styled.div<Required<ComponentWidth>>`
  display: flex; 
  flex-direction: column; 
  ${({ width }) => css`
    /* TODO: gap should come from theme */
    gap: 8px; 
    width: ${positionPropToCSS(width)}; 
  `}
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
