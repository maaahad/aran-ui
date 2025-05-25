import {
	FloatingFocusManager,
	FloatingPortal,
	autoUpdate,
	size,
	useFloating,
} from "@floating-ui/react";
import cs from "classnames";
import { useRef, useState } from "react";
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
	DropdownContainer,
	SearchInputContainer,
	SearchResultsContainer,
	StateStyled,
	StyledInput,
} from "./styled";

/**
 * TODO: : (maaahad)
 * 1. Dropdown with  No Data
 * 2. Dropdown with loading state
 * 3. Default Dropdown
 * 4. Custom dropdown
 * 5. State (Warning, Info, Error)
 * 6. Dropdown Placement
 * 7. Infinite Scrolling
 * 8. Variants (outlined, filled, borderless, underlined)
 * 9. set withSearchResult to true once input field got focus again
 * 10. searchOptions should be implemented via Select component
 * 11. All icon should be Replace with IconButton
 * 12. SearchItem should be implemented like a Card with icon
 * 13. Clear input
 * 14. Try Popover Api instead of Floating UI
 *
 * TODO: (maaahad) Second Iteration
 * 1. Compound Component Pattern
 */

type DropdownProps = {
	loading?: boolean;
	data?: { label: string; value: string; disabled?: boolean }[]; // NOTE: (maaahad) this is used to render default dropdown item
	onSelect?: () => void; // NOTE: (maaahad) used in default case only
	renderDropdownItem?: () => ReactNode; // NOTE: this has less priority than customDropdown
	customDropdown?: ReactNode; // NOTE: (maaahad) this will prioritize everyting
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
		dropdown?: DropdownProps;
	};

// NOTE: (maaahad) this component might be useful in some other data related component
const State: FC<{ state: "loading" | "nodata" }> = ({ state }) => {
	// TODO: (maaahad) replace with right data, Need lg sized Icon and only visible if input got focus
	return (
		<StateStyled>
			{state === "loading" ? (
				<CloseLineIcon size="lg" />
			) : (
				<SearchIcon size="lg" />
			)}
		</StateStyled>
	);
};

export const SearchInput: FC<Props> = ({
	placeholder = "Search",
	searchSelect,
	mt = 0,
	width = "full",
	value = "",
	onChange,
	className,
	dropdown,
}) => {
	const { loading, data } = dropdown || {};
	const inputRef = useRef<HTMLInputElement>(null);
	const [withDropdown, setWithDropdown] = useState<boolean>(false);
	const loadingOrNodata = loading || !data?.length;

	return (
		<>
			<SearchInputContainer
				// ref={refs.setReference}
				mt={mt}
				width={width}
				className={className}
				withDropdown={withDropdown}
			>
				{searchSelect && (
					<button type="button" className="searchSelectContainer">
						SelectS
					</button>
				)}

				<div className="inputContainer">
					{!searchSelect && <SearchIcon className="searchIcon" />}
					<StyledInput
						ref={inputRef}
						className={cs({
							withSearchSelect: !!searchSelect,
						})}
						placeholder={placeholder}
						value={value}
						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
							onChange(event.target.value);
						}}
						onFocus={(_event: React.ChangeEvent<HTMLInputElement>) => {
							setWithDropdown(true);
						}}
						onBlur={(_event: React.ChangeEvent<HTMLInputElement>) => {
							setWithDropdown(false);
						}}
						withSearchSelect={!!searchSelect}
						withSearchResult={withDropdown}
					/>
					{!!value && <CloseLineIcon className="closeIcon" />}
				</div>
				{searchSelect && (
					<button type="button" className="searchIconContainer">
						<SearchIcon />
					</button>
				)}
			</SearchInputContainer>
			<DropdownContainer open={withDropdown}>
				{loadingOrNodata ? (
					<State state={loading ? "loading" : "nodata"} />
				) : (
					<div>to be implemented</div>
				)}
			</DropdownContainer>
		</>
	);
};
