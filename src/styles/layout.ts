import { css } from "styled-components";

type Wrap = "wrap" | "nowrap" | "wrap-reverse";
type ItemAlignment =
  | "normal"
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch";

type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "normal"
  | "stretch"
  | "flex-start"
  | "flex-end";

export const applyFlex = ({
  dir = "row",
  align = "normal",
  justify = "normal",
  wrap = "nowrap",
  gap = 4,
}: {
  dir?: "row" | "column";
  align?: ItemAlignment;
  justify?: JustifyContent;
  wrap?: Wrap;
  gap?: number;
}) => {
  return css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    gap: ${gap + "px"};
  `;
};
