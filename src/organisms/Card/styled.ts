import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  ${({ theme }) => css`
    display: flex; 
    flex-direction: column; 
    border: 1px solid ${theme.color.line}; 
    /* FIXME: (maaahad) border radius, padding should come from theme */
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

export const Header = styled.div`
  ${({ theme }) => css`
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
    border-bottom: ${theme.color.line}; 
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    /* TODO: (maaahad) padding should be responsive */
    padding: 12px 16px; 
    border-top: ${theme.color.line}; 
  `}
`;
