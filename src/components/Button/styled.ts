import styled, { css, keyframes } from "styled-components";
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
  ${layout.applyFlex({ align: "center", justify: "center", gap: 8 })}
  ${({ theme }) => css`
    background-color: transparent;
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

const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
}
`;

export const LoadingIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotate} 2s linear infinite;
`;
