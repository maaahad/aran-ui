import React from "react";
import type { ComponentProps, FC } from "react";
import { Button, type Props } from "../Button";

const Example: FC<
	Omit<ComponentProps<typeof Button>, "onClick" | "children">
> = ({
	disabled = false,
	size = "md",
	variant = "filled",
	loading,
	loadingText,
}) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Button
				disabled={disabled}
				size={size}
				variant={variant}
				loading={loading}
				loadingText={loadingText}
				onClick={(event) => console.log(event)}
			>
				Button
			</Button>
		</div>
	);
};

export default Example;
