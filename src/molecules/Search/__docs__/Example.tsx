import React, { useCallback, useState } from "react";
import type { ComponentProps, FC } from "react";
import { Search } from "../Search";

type Props = ComponentProps<typeof Search>;

const SampleData: Props["searchResult"] = [
	{ value: "ahad" },
	{ value: "muhammed" },
	{ value: "israt" },
	{ value: "jahan" },
	{ value: "arwa" },
	{ value: "anabia" },
];

const Example: FC<Props> = ({ searchSelect, ...restProps }) => {
	const [searchOn, setSearchOn] = useState(searchSelect?.options[0].value);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [searchResult, setSearchResult] = useState<Props["searchResult"]>();

	const handleSearchQueryChange = useCallback((query: string) => {
		setSearchQuery(query);
		if (!query) setSearchResult(undefined);
		else
			setSearchResult(SampleData.filter((data) => data.value.includes(query)));
	}, []);

	return (
		<Search
			{...restProps}
			searchSelect={
				searchSelect
					? { ...searchSelect, onChangeSearchOption: setSearchOn }
					: undefined
			}
			value={searchQuery}
			onChange={handleSearchQueryChange}
			searchResult={searchResult}
		/>
	);
};

export default Example;
