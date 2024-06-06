import styled, { css } from "styled-components";
import { ButtonProps } from "./types.ts";
import { Spacing } from "../../tokens/index.ts";
import { layout } from "../../styles/index.ts";

const SIZE = {
  small: css`
    padding: ${Spacing.SpacingToken.SP4} ${Spacing.SpacingToken.SP8};
    height: 24px;
  `,
  medium: css`
    padding: ${Spacing.SpacingToken.SP8} ${Spacing.SpacingToken.SP12};
    height: 32px;
  `,
  large: css`
    padding: ${Spacing.SpacingToken.SP12} ${Spacing.SpacingToken.SP16};
    height: 40px;
  `,
};

const CATEGORY = {
  primary: css`
    border: 1px solid green;
  `,
  secondary: css`
    border: 1px solid red;
  `,
  tertiary: css`
    border: none;
  `,
};

export const StyledButton = styled.button<
  Required<Pick<ButtonProps, "category" | "block" | "size">>
>`
  cursor: pointer;
  ${layout.applyFlex({ align: "center", justify: "center" })}
  ${({ theme }) => css`
    background-color: transparent;
    &:hover {
      background-color: ${theme.color.text.button.primary.default.hover};
    }
  `}
  ${(props) => SIZE[props.size]}
  ${(props) => CATEGORY[props.category]}
  ${({ block }) =>
    block &&
    css`
      width: 100%;
      flex: 1;
    `}
`;
