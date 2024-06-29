// components/button/button.tsx
import React from "react";
import { ButtonProps } from "./types";
import { StyledButton } from "./styled.ts";

import StatusIcon from "../Icons/StatusIcon.tsx";
import { LoadingIconContainer } from "./styled.ts";

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  label = "",
  block = false,
  onClick = () => {},
  loading = false,
  category = "primary",
  variant = "default",
  ...passthroughProps
}) => {
  return (
    <StyledButton
      size={size}
      block={block}
      onClick={onClick}
      category={category}
      variant={variant}
      type="button"
      {...passthroughProps}
    >
      {loading && (
        <LoadingIconContainer>
          <StatusIcon />
        </LoadingIconContainer>
      )}
      <span>{label}</span>
      {/* icon */}
    </StyledButton>
  );
};

export default Button;
