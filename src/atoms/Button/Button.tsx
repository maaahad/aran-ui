// components/button/button.tsx
import type {
	FC,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
} from "react";
import { ButtonStyled } from "./Button.styled";

import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";

export type ButtonProps = {
	text?: string;
	primary?: boolean;
	disabled?: boolean;
	size?: "small" | "medium" | "large";
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

export type Props = ComponentProps &
	ComponentSize &
	Omit<ComponentResponsiveProps, "pd"> & {
		loading?: boolean;
		loadingText?: string;
		htmlType?: "button" | "submit" | "reset";
		disabled?: boolean;
		variant: "filled" | "outlined" | "ghost";
		leftIcon?: ReactNode;
		rightIcon?: ReactNode;
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	};

export const Button: FC<PropsWithChildren<Props>> = ({
	children,
	loading = false,
	loadingText,
	htmlType = "button",
	disabled,
	variant = "filled",
	leftIcon,
	rightIcon,
	onClick,
	...styleProps
}) => {
	return (
		<ButtonStyled
			type={htmlType}
			disabled={disabled}
			{...styleProps}
			onClick={onClick}
		>
			<div>{leftIcon}</div>
			{loading && <div>Loading</div>}
			<div>{loading ? loadingText : children}</div>
			<div>{rightIcon}</div>
		</ButtonStyled>
	);
};
