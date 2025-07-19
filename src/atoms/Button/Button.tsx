// components/button/button.tsx
import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
} from "react";
import { SpinnerIcon } from "../Icons";
import { ButtonStyled } from "./Button.styled";

import { useTheme } from "styled-components";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	PropPosition,
	Size,
	Variant,
} from "../../utils/types";

export type Props = ComponentProps &
	Omit<ComponentResponsiveProps, "pd"> & {
		loading?: boolean;
		loadingText?: string;
		htmlType?: "button" | "submit" | "reset";
		disabled?: boolean;
		variant?: Variant;
		onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
		icon?: ReactNode;
		iconPosition?: PropPosition;
		ripple?: boolean;
		size?: Size;
	};

export const Button: FC<PropsWithChildren<Props>> = ({
	children,
	loading = false,
	loadingText,
	htmlType = "button",
	disabled = false,
	variant = "filled",
	icon,
	iconPosition = "left",
	onClick,
	size = "md",
	ripple = false,
	...styleProps
}) => {
	const theme = useTheme();

	const iconColor = useMemo(() => {
		if (variant === "solid") return theme.colors.semantic.text.inverted;
		if (variant === "plain") return theme.colors.semantic.text.link;
		return theme.colors.semantic.text.primary;
	}, [theme, variant]);

	return (
		<ButtonStyled
			type={htmlType}
			disabled={disabled}
			loading={loading}
			size={size}
			variant={variant}
			{...styleProps}
			onClick={onClick}
			reverse={iconPosition === "right"}
		>
			{ripple && <span className="ripple" />}
			{loading ? <SpinnerIcon fill={iconColor} /> : icon}
			<div>{loading ? loadingText : children}</div>
		</ButtonStyled>
	);
};
