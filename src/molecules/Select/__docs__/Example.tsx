import React from "react";
import type { ComponentProps, FC } from "react";
import { Select } from "../Select";

type Props = ComponentProps<typeof Select>;

const Example: FC<Props> = (props) => {
	return (
		<div
			style={{
				marginTop: "50px",
			}}
		>
			<Select {...props} />
		</div>
	);
};

export default Example;
