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
				<SearchInput.DropdownItem
					onClick={() => {
						setQuery("");
						setItems([]);
					}}
				>
					Item 1
				</SearchInput.DropdownItem>

				<SearchInput.DropdownItem
					onClick={() => {
						setQuery("");
						setItems([]);
					}}
				>
					Item 2
				</SearchInput.DropdownItem>
				<SearchInput.DropdownItem
					onClick={() => {
						setQuery("");
						setItems([]);
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}
					>
						<div>item 3</div>
						<div>Description</div>
					</div>
				</SearchInput.DropdownItem>
			</SearchInput.Dropdown>
		</SearchInput.Root>
	);
};

export default Example;
