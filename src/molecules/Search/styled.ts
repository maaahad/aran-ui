import styled from "styled-components";
import { applyResponsiveCSS } from "../../utils/style";
import type { ComponentResponsiveProps } from "../../utils/types";

export const SearchContainer = styled.div<Omit<ComponentResponsiveProps, "pd">>`
${applyResponsiveCSS}; 
display: flex; 
flex-direction: row; 
align-items: center; 
`;
