// components/button/button.tsx
import type { MouseEventHandler, FC } from "react";
import styled from "styled-components";

export type ButtonProps = {
	text?: string;
	primary?: boolean;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 10px;
  display: inline-block;
  color: ${(props) => props.theme.color.text.body.primary};
  background-color: ${(props) => (props.primary ? "#FF5655" : "#f4c4c4")};
  padding: ${(props) =>
		props.size === "small"
			? "7px 25px 8px"
			: props.size === "medium"
				? "9px 30px 11px"
				: "14px 30px 16px"};
`;

export const Button: FC<ButtonProps> = ({
	size,
	primary,
	disabled,
	text,
	onClick,
	...props
}) => {
	return (
		<StyledButton
			type="button"
			onClick={onClick}
			primary={primary}
			disabled={disabled}
			size={size}
			{...props}
		>
			{text}
		</StyledButton>
	);
};
