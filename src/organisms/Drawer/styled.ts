import styled, { css } from "styled-components";

export const DrawerContainer = styled.div<{ open?: boolean }>`
  ${({ open = false }) => css`
    width: 200px; 
    background-color: white; 
    position: fixed; 
    top: 0; 
    bottom: 0; 
    left: ${open ? "0" : "-200px"}; 
  `}
`;
