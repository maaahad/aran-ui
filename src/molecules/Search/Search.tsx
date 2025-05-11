import {
	FloatingFocusManager,
	FloatingPortal,
	autoUpdate,
	size,
	useFloating,
} from "@floating-ui/react";
import cs from "classnames";
import type React from "react";
import type { FC, ReactNode } from "react";
import { CloseLineIcon, SearchIcon } from "../../atoms";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";
import type { SelectOption } from "../Select/Select";
import {
	SearchContainer,
	SearchResultsContainer,
	StyledInput,
	SearchResultItem,
} from "./styled";

type SearchResult = {
	id: string;
	leftSlot: ReactNode;
	label: string;
	rightSlot?: ReactNode;
	onClick?: () => void;
};

type Props = ComponentProps &
	ComponentSize &
	Omit<ComponentResponsiveProps, "pd"> & {
		value: string;
		onChange: (value: string) => void;
		searchSelect?: {
			onChangeSearchOption: (value: string) => void;
			options: (SelectOption & {
				icon: ReactNode;
			})[];
		};
		placeholder?: string;
		searchResults?: SearchResult[];
	};

//TODO: (maaahad) on second iteration, try with Compound Component pattern
//TODO: (maaahad) add result dropdown
export const Search: FC<Props> = ({
	placeholder = "Search",
	searchSelect,
	searchResults,
	mt = 0,
	width = "full",
	value = "",
	onChange,
	className,
}) => {
	const withSearchResult = !!searchResults?.length;
	const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
		whileElementsMounted: autoUpdate,
		open: withSearchResult,
		middleware: [
			// TODO: (maaahad) play with this later
			size({
				apply({ rects, elements }) {
					Object.assign(elements.floating.style, {
						width: `${rects.reference.width}px`,
						// height: `${availableHeight}px`,
						height: "fit-content",
					});
				},
				// padding: 90,
			}),
		],
	});

	// TODO: (maaahad) searchOptions should be implemented via Select component
	//
	// TODO: (maaahad) All icon should be Replace with IconButton
	// TODO: (maaahad) SearchItem should be implemented like a Card with icon

	return (
		<>
			<SearchContainer
				ref={refs.setReference}
				mt={mt}
				width={width}
				className={className}
				withSearchResult={withSearchResult}
			>
				{searchSelect && (
					<button type="button" className="searchSelectContainer">
						SelectS
					</button>
				)}

				<div className="inputContainer">
					{!searchSelect && <SearchIcon className="searchIcon" />}
					<StyledInput
						className={cs({
							withSearchSelect: !!searchSelect,
						})}
						placeholder={placeholder}
						value={value}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							onChange(event.target.value);
						}}
						withSearchSelect={!!searchSelect}
						withSearchResult={withSearchResult}
					/>
					{!!value && <CloseLineIcon className="closeIcon" />}
				</div>
				{searchSelect && (
					<button type="button" className="searchIconContainer">
						<SearchIcon />
					</button>
				)}
			</SearchContainer>
			{withSearchResult && (
				<FloatingPortal>
					<FloatingFocusManager
						context={context}
						initialFocus={-1}
						visuallyHiddenDismiss
					>
						<SearchResultsContainer
							ref={refs.setFloating}
							style={floatingStyles}
						>
							{searchResults.map((result) => {
								return (
									<SearchResultItem
										key={result.id}
										className="searchResultItem"
										onClick={() => result.onClick?.()}
										clickable={!!result.onClick}
									>
										<div className="left">
											{result.leftSlot}
											<div>{result.label}</div>
										</div>
										{result.rightSlot && (
											<div className="right">{result.rightSlot}</div>
										)}
									</SearchResultItem>
								);
							})}
						</SearchResultsContainer>
					</FloatingFocusManager>
				</FloatingPortal>
			)}
		</>
	);
};
