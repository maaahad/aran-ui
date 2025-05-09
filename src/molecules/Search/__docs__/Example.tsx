import React, { useState } from "react";
import type { ComponentProps, FC } from "react";
import { Search } from "../Search";

type Props = ComponentProps<typeof Search>;

const Example: FC<Props> = ({ searchSelect, ...restProps }) => {
	const [searchOn, setSearchOn] = useState(searchSelect?.options[0].value);
	const [searchQuery, setSearchQuery] = useState<string>("");

	return (
		<Search
			{...restProps}
			searchSelect={
				searchSelect
					? { ...searchSelect, onChangeSearchOption: setSearchOn }
					: undefined
			}
			value={searchQuery}
			onChange={setSearchQuery}
		/>
	);
};

export default Example;
