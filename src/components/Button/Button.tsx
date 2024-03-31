// components/button/button.tsx
import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled.ts";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  label = "",
  fullWidth = false,
  onClick = () => {},
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      fullWidth={fullWidth}
      onClick={onClick}
      type="button"
      {...props}
    >
      <span>{label}</span>
    </StyledButton>
  );
};

export default Button;
