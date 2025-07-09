// components/button/button.tsx
import type { FC, PropsWithChildren, ReactNode } from "react";
import { SpinnerIcon } from "../Icons";
import { ButtonStyled } from "./Button.styled";

import type {
	ComponentProps,
	ComponentResponsiveProps,
	PropPosition,
	Size,
} from "../../utils/types";

export type Props = ComponentProps &
	Omit<ComponentResponsiveProps, "pd"> & {
		loading?: boolean;
		loadingText?: string;
		htmlType?: "button" | "submit" | "reset";
		disabled?: boolean;
		variant: "filled" | "outlined" | "ghost";
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
		icon?: ReactNode;
		iconPosition: PropPosition;
		ripple?: boolean;
		size: Size;
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
	size = "md",
	ripple = false,
	...styleProps
}) => {
	console.log(ripple);
	return (
		<ButtonStyled
			type={htmlType}
			disabled={disabled}
			size={size}
			{...styleProps}
			onClick={onClick}
			reverse={iconPosition === "right"}
		>
			{ripple && <span className="ripple" />}
			{loading ? <SpinnerIcon /> : icon}
			<div>{loading ? loadingText : children}</div>
		</ButtonStyled>
	);
};
