import React from "react";
import type { ComponentProps, FC } from "react";
import { Search } from "../Search";

type Props = ComponentProps<typeof Search>;

const Example: FC<Props> = (props) => {
	return <Search {...props} />;
};

export default Example;
