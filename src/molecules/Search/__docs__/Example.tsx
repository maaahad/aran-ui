import React, { useCallback, useState } from "react";
import type { ComponentProps, FC } from "react";
import { Search } from "../Search";
import { SearchIcon } from "../../../atoms";

type Props = ComponentProps<typeof Search>;

const Data = [
	{
		title: "Ahad",
		id: "ahad",
	},
	{
		title: "Israt",
		id: "israt",
	},
	{
		title: "Anabia",
		id: "anabia",
	},
	{
		title: "Arwa",
		id: "arwa",
	},
];

const Example: FC<Props> = ({ searchSelect, ...restProps }) => {
	const [searchOn, setSearchOn] = useState(searchSelect?.options[0].value);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [searchResults, setSearchResults] = useState<Props["searchResults"]>();

	const handleSearchQueryChange = useCallback((query: string) => {
		setSearchQuery(query);
		if (!query) setSearchResults(undefined);
		else
			setSearchResults(
				Data.filter((d) =>
					d.title.toLowerCase().includes(query.toLowerCase()),
				).map((d) => ({
					leftSlot: <SearchIcon />,
					label: d.title,
					id: d.id,
					rightSlot: <div>{d.id}</div>,
					onClick: () => {
						console.log(`${d.id} is clicked`);
					},
				})),
			);
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
			searchResults={searchResults}
		/>
	);
};

export default Example;
