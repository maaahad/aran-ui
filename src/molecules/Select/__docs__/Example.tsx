import React from "react";
import type { ComponentProps, FC } from "react";
import { Select } from "../Select";

type Props = ComponentProps<typeof Select>;

const Example: FC<Props> = (props) => {
	return <Select {...props} />;
};

export default Example;
