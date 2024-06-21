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
  onClick = () => { },
  loading = false,
  category = "primary",
  ...props
}) => {
  return (
    <StyledButton
      size={size}
      block={block}
      onClick={onClick}
      category={category}
      type="button"
      {...props}
    >
      {/* icon  + loading icon*/}
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
