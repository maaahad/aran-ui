// components/button/button.tsx
import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled.ts";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  label = "",
  fullWidth = false,
  onClick = () => {},
  category = "primary",
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      category={category}
      type="button"
      {...props}
    >
      {/* icon */}
      <span>{label}</span>
      {/* icon */}
    </StyledButton>
  );
};

export default Button;
