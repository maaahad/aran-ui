import React, { useState } from "react";
import type { ComponentProps, FC } from "react";
import { Search } from "../Search";

type Props = ComponentProps<typeof Search>;

const Example: FC<Props> = ({ searchSelect, ...restProps }) => {
	const [searchOn, setSearchOn] = useState(searchSelect?.options[0].value);

	return (
		<Search
			{...restProps}
			searchSelect={
				searchSelect
					? { ...searchSelect, onChangeSearchOption: setSearchOn }
					: undefined
			}
		/>
	);
};

export default Example;
