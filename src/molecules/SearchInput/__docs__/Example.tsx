import React, { useCallback, useState } from "react";
import type { ComponentProps, FC } from "react";
import { CloseLineIcon, SearchIcon } from "../../../atoms";
import SearchInput from "../SearchInput";

type Props = ComponentProps<typeof SearchInput.Root>;

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

const Example: FC<Props> = (props) => {
	const [query, setQuery] = useState<string>("");
	console.log("new query", query);

	return (
		<SearchInput.Root
			value={query}
			onInputValueChange={setQuery}
			width="full"
			mt={32}
		>
			<SearchInput.Input placeholder="Search here...." />
		</SearchInput.Root>
	);
};

// const Example: FC<Props> = ({ searchSelect, ...restProps }) => {
// 	const [searchOn, setSearchOn] = useState(searchSelect?.options[0].value);
// 	const [searchQuery, setSearchQuery] = useState<string>("");
//
// 	const [searchResults, setSearchResults] =
// 		useState<Required<Props>["dropdown"]["options"]>();
//
// 	const handleSearchQueryChange = useCallback((query: string) => {
// 		setSearchQuery(query);
// 		if (!query) setSearchResults(undefined);
// 		else
// 			setSearchResults(
// 				Data.filter((d) =>
// 					d.title.toLowerCase().includes(query.toLowerCase()),
// 				).map((d, index) => ({
// 					label: d.title,
// 					value: d.id,
// 					disabled: index % 2 === 0,
// 					...d,
// 				})),
// 			);
// 	}, []);
//
// 	return (
// 		<SearchInput
// 			{...restProps}
// 			searchSelect={
// 				searchSelect
// 					? { ...searchSelect, onChangeSearchOption: setSearchOn }
// 					: undefined
// 			}
// 			value={searchQuery}
// 			onChange={handleSearchQueryChange}
// 			dropdown={{
// 				options: searchResults,
// 				loading: false,
// 				onSelect: (value, option) => console.log("selected : ", value, option),
// 			}}
// 		/>
// 	);
// };
//
export default Example;
