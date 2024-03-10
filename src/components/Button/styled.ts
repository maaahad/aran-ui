import styled, { css } from "styled-components";
import { ButtonProps } from "./types.ts";

// padding should come from spacing token
const SIZE = {
  small: css`
    padding: 4px 8px;
    height: 24px;
  `,
  medium: css`
    padding: 8px 12px;
    height: 32px;
  `,
};

export const StyledButton = styled.button<Required<Pick<ButtonProps, "size">>>`
  cursor: pointer;
  ${(props) => SIZE[props.size]}
`;
