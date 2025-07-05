// components/button/button.tsx
import type {
	FC,
	MouseEventHandler,
	PropsWithChildren,
	ReactNode,
} from "react";
import { ButtonStyled } from "./Button.styled";
import { SpinnerIcon } from "../Icons";

import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
	PropPosition,
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
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
		icon?: ReactNode;
		iconPosition: PropPosition;
	};

export const Button: FC<PropsWithChildren<Props>> = ({
	children,
	loading = false,
	loadingText,
	htmlType = "button",
	disabled,
	variant = "filled",
	icon,
	iconPosition = "left",
	onClick,
	...styleProps
}) => {
	return (
		<ButtonStyled
			type={htmlType}
			disabled={disabled}
			{...styleProps}
			onClick={onClick}
			reverse={iconPosition === "right"}
		>
			{loading ? <SpinnerIcon /> : icon}
			<div>{loading ? loadingText : children}</div>
		</ButtonStyled>
	);
};
