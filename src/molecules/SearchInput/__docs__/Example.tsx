import React, { useCallback, useEffect, useState } from "react";
import type { ComponentProps, FC } from "react";
import { CloseLineIcon, SearchIcon } from "../../../atoms";
import { AranThemeProvider } from "../../../themes";
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

const Example: FC<Props> = ({ variant, size }) => {
	const [query, setQuery] = useState<string>("");
	const [items, setItems] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(items.length > 1);

	const handleQueryChange = useCallback((value: string) => {
		setQuery(value);
		// NOTE: (maaahad) testing for query 'aa'
		if (value === "aa") {
			setItems(["item1", "item2", "item3", "item4"]);
		} else {
			setItems([]);
		}
	}, []);

	useEffect(() => {
		// NOTE: (maaahad) testing for query 'aa'
		if (items.length > 0) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [items.length]);

	return (
		<SearchInput.Root
			value={query}
			onInputValueChange={handleQueryChange}
			width="full"
			mt={32}
			variant={variant}
			size={size}
			open={isOpen}
		>
			<SearchInput.Input placeholder="Search here...." />
			<SearchInput.Dropdown>
				<div>Item 1</div>
				<div>Item 2</div>
				<div>Item 3</div>
			</SearchInput.Dropdown>
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
