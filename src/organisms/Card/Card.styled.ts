import styled, { css } from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

export const CardContainer = styled.div<Omit<ComponentResponsiveProps, "pd">>`
  ${applyResponsiveCSS}; 
    overflow: hidden; 
    display: flex; 
    flex-direction: column; 
    border: 1px solid red; 

    /* FIXME: (maaahad) border radius should come from theme */
    border-radius: 8px;
`;

export const Body = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.color.background.default}; 
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
  `}
`;

export const Slot = styled.div<{ slot: "header" | "footer" }>`
  ${({ slot }) => css`
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
    ${
			slot === "header" &&
			css`
        border-bottom: 1px solid red; 
      `
		}
    ${
			slot === "footer" &&
			css`
        border-top: 1px solid red; 
      `
		}
  `}
`;
