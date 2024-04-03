// Common props (ComponentProps) , responsive props should come from common place
// This file only needs to add Button specific props

import { MouseEventHandler } from "react";

export type ButtonProps = {
  label?: string;
  size?: "small" | "medium" | "large";
  variant?: "default" | "success" | "error"; // add other variants
  category?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  target?: "_self" | "_blank" | "_parent" | "_top";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  // styles
  block?: boolean;
  // icon
};
