import { css } from "styled-components";

export const applyFlex = ({
  dir = "row",
  align = "stretch",
  justify = "stretch",
  wrap = "nowrap",
}: {
  dir?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  justify?: "flex-start" | "flex-end" | "center" | "stretch";
  wrap?: "wrap" | "nowrap";
}) => {
  return css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
  `;
};
