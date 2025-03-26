import styled, { css } from "styled-components";
import type { ComponentPositionProps } from "../../utils/types";
import { positionPropToCSS } from "../../utils/style";

export const CardContainer = styled.div<Pick<ComponentPositionProps, "mt">>`
  ${({ theme, mt }) => css`
    overflow: hidden; 
    display: flex; 
    flex-direction: column; 
    border: 1px solid ${theme.color.line}; 
    margin-top: ${positionPropToCSS(mt)}; 

    /* FIXME: (maaahad) border radius should come from theme */
    border-radius: 8px;
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background.secondary}; 
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
  `}
`;

export const Slot = styled.div<{ slot: "header" | "footer" }>`
  ${({ theme, slot }) => css`
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
    ${
			slot === "header" &&
			css`
        border-bottom: 1px solid ${theme.color.line}; 
      `
		}
    ${
			slot === "footer" &&
			css`
        border-top: 1px solid ${theme.color.line}; 
      `
		}
  `}
`;
