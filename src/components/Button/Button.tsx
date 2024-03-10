// components/button/button.tsx
import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled.ts";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  label = "",
  onClick = () => {},
  ...props
}) => {
  return (
    <StyledButton size={size} onClick={onClick} type="button" {...props}>
      {label}
    </StyledButton>
  );
};

export default Button;
