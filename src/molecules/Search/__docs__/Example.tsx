import React, { useCallback, useState } from "react";
import type { ComponentProps, FC } from "react";
import { CloseLineIcon, SearchIcon } from "../../../atoms";
import { Search } from "../Search";

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
				).map((d) => (
					<button
						key={d.id}
						type="button"
						onClick={() => console.log(d.id)}
						style={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "8px",
							width: "100%",
							border: "none",
							padding: "8px 4px",
						}}
					>
						<CloseLineIcon />
						<div>{d.id}</div>
						<div>{d.title}</div>
					</button>
				)),
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
