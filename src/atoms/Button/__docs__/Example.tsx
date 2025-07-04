import React from "react";
import type { ComponentProps, FC } from "react";
import { Button, type Props } from "../Button";

const Example: FC<
	Omit<ComponentProps<typeof Button>, "onClick" | "children">
> = (props) => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100%",
			}}
		>
			<Button onClick={(event) => console.log(event)} {...props}>
				Button
			</Button>
		</div>
	);
};

export default Example;
