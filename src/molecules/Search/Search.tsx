import {
	FloatingFocusManager,
	FloatingPortal,
	autoUpdate,
	size,
	useFloating,
} from "@floating-ui/react";
import cs from "classnames";
import { useEffect, useState } from "react";
import type React from "react";
import type { FC, ReactNode } from "react";
import { CloseLineIcon, SearchIcon } from "../../atoms";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";
import type { SelectOption } from "../Select/Select";
import { SearchContainer, SearchResultsContainer, StyledInput } from "./styled";

/**
 * TODO: : (maaahad)
 * 1. Dropdown with  No Data
 * 2. Dropdown with loading state
 * 3. Default Dropdown
 * 4. Custom dropdown
 * 5. Status (Warning, Info, Error)
 * 6. Dropdown Placement
 * 7. Infinite Scrolling
 * 8. Variants (outlined, filled, borderless, underlined)
 * 9. set withSearchResult to true once input field got focus again
 * 10. searchOptions should be implemented via Select component
 * 11. All icon should be Replace with IconButton
 * 12. SearchItem should be implemented like a Card with icon
 *
 * TODO: (maaahad) Second Iteration
 * 1. Compound Component Pattern
 */

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
		searchResults?: ReactNode[];
	};

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
	const [withSearchResult, setWithSearchResult] = useState<boolean>(
		!!searchResults?.length,
	);
	const { refs, floatingStyles, context } = useFloating<HTMLInputElement>({
		whileElementsMounted: autoUpdate,
		open: withSearchResult,
		onOpenChange: setWithSearchResult,
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

	// TODO: (maaahad) is it possible to get rid of useEffect
	useEffect(() => {
		setWithSearchResult(!!searchResults?.length);
	}, [searchResults?.length]);

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
							{searchResults?.map((resultItem) => resultItem)}
						</SearchResultsContainer>
					</FloatingFocusManager>
				</FloatingPortal>
			)}
		</>
	);
};
