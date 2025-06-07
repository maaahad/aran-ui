import type React from "react";
import {
	type FC,
	type PropsWithChildren,
	createContext,
	memo,
	useCallback,
	useContext,
} from "react";
import type { ComponentProps } from "../../utils/types";

/*
 * TODO:
 * 1. Add Generic type to SearchInput
 * 2. useContext to expose for ex. parent ref, to control the position of Dropdown and other state handle logic
 * 3. A separate component to render the Component in portal
 * */

type Props = ComponentProps & {
	value?: string;
	onInputValueChange: (value: string) => void;
};

type InputProps = ComponentProps & {
	placeholder?: string;
};

type SearcInputContextType = {
	value?: string;
	onChange: (value: string) => void;
};

const SearchInputContext = createContext<SearcInputContextType | null>(null);

const useSearchInputContext = () => {
	const searchInputContext = useContext(SearchInputContext);

	if (!searchInputContext) {
		throw new Error(
			"useSearchInputContext should be used within SearchInputContext.Provider",
		);
	}

	return searchInputContext;
};

const Input: FC<InputProps> = ({ className, placeholder }) => {
	const { value, onChange } = useSearchInputContext();

	const handleInputValueChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	return (
		<div className={className}>
			<div>left slot</div>
			<input
				value={value}
				onChange={handleInputValueChange}
				placeholder={placeholder}
			/>
			<div>right slot</div>
		</div>
	);
};

const SearchInput: FC<PropsWithChildren<Props>> = ({
	children,
	className,
	value,
	onInputValueChange,
}) => {
	return (
		<SearchInputContext.Provider
			value={{
				value,
				onChange: onInputValueChange,
			}}
		>
			<div>{children}</div>
		</SearchInputContext.Provider>
	);
};

export default {
	Root: memo(SearchInput),
	Input: memo(Input),
};

// import cs from "classnames";
// import type React from "react";
// import { useRef, useState } from "react";
// import type { FC, ReactNode } from "react";
// import {
// 	CloseLineIcon,
// 	NoSearchResultIcon,
// 	SearchIcon,
// 	SpinnerIcon,
// } from "../../atoms";
// import { useClickOutside } from "../../hooks/window/useClickOutside";
// import type {
// 	ComponentProps,
// 	ComponentResponsiveProps,
// 	ComponentSize,
// } from "../../utils/types";
// import type { SelectOption } from "../Select/Select";
// import {
// 	DropdownContainer,
// 	DropdownOptionContainer,
// 	SearchInputContainer,
// 	StateStyled,
// 	StyledInput,
// } from "./styled";
//
// /**
//  * TODO: : (maaahad)
//  * 1. Dropdown with  No Data
//  * 2. Dropdown with loading state
//  * 3. Default Dropdown
//  * 4. Custom dropdown
//  * 5. State (Warning, Info, Error)
//  * 6. Dropdown Placement
//  * 7. Infinite Scrolling
//  * 8. Variants (outlined, filled, borderless, underlined)
//  * 9. set withSearchResult to true once input field got focus again
//  * 10. searchOptions should be implemented via Select component
//  * 11. All icon should be Replace with IconButton
//  * 12. SearchItem should be implemented like a Card with icon
//  * 13. Clear input
//  * 14. Try Popover Api instead of Floating UI
//  *
//  * TODO: (maaahad) Second Iteration
//  * 1. Compound Component Pattern
//  */
//
// type DropdownOption = Partial<Record<string, any>> & {
// 	label?: string;
// 	value: string;
// 	disabled?: boolean;
// };
//
// type DropdownProps = {
// 	loading?: boolean;
// 	options?: DropdownOption[];
// 	onSelect?: (value: string, option: DropdownOption) => void;
// 	renderDropdownItem?: (option: DropdownOption) => ReactNode;
//
// 	// customDropdown?: ReactNode; // NOTE: (maaahad) this will prioritize everyting, On 2nd Iteration
// };
//
// type Props = ComponentProps &
// 	ComponentSize &
// 	Omit<ComponentResponsiveProps, "pd"> & {
// 		value: string;
// 		onChange: (value: string) => void;
// 		searchSelect?: {
// 			onChangeSearchOption: (value: string) => void;
// 			options: (SelectOption & {
// 				icon: ReactNode;
// 			})[];
// 		};
// 		placeholder?: string;
// 		dropdown?: DropdownProps;
// 	};
//
// // NOTE: (maaahad) this component might be useful in some other data related component
// const State: FC<{ state: "loading" | "nodata" }> = ({ state }) => {
// 	// TODO: (maaahad) replace with right data, Need lg sized Icon and only visible if input got focus
// 	return (
// 		<StateStyled>
// 			{state === "loading" ? (
// 				<SpinnerIcon size="lg" />
// 			) : (
// 				<NoSearchResultIcon size="lg" />
// 			)}
// 		</StateStyled>
// 	);
// };
//
// const DropdownOption: FC<{
// 	label?: string;
// 	value: string;
// 	disabled?: boolean;
// 	onSelect?: (value: string) => void;
// }> = ({ label, value, disabled, onSelect }) => {
// 	return (
// 		<DropdownOptionContainer
// 			clickable={Boolean(!disabled && onSelect)}
// 			onClick={() => onSelect?.(value)}
// 			disabled={disabled}
// 		>
// 			{label || value}
// 		</DropdownOptionContainer>
// 	);
// };
//
// export const SearchInput: FC<Props> = ({
// 	placeholder = "Search",
// 	searchSelect,
// 	mt = 0,
// 	width = "full",
// 	value = "",
// 	onChange,
// 	className,
// 	dropdown,
// }) => {
// 	const { loading, options, renderDropdownItem } = dropdown || {};
// 	const inputRef = useRef<HTMLInputElement>(null);
// 	const rootRef = useRef<HTMLDivElement>(null);
// 	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
// 	const loadingOrNodata = loading || !options?.length;
// 	useClickOutside(rootRef, () => setOpenDropdown(false));
//
// 	return (
// 		<div ref={rootRef}>
// 			<SearchInputContainer
// 				mt={mt}
// 				width={width}
// 				className={className}
// 				withDropdown={openDropdown}
// 			>
// 				{searchSelect && (
// 					<button type="button" className="searchSelectContainer">
// 						SelectS
// 					</button>
// 				)}
//
// 				<div className="inputContainer">
// 					{!searchSelect && <SearchIcon className="searchIcon" />}
// 					<StyledInput
// 						ref={inputRef}
// 						className={cs({
// 							withSearchSelect: !!searchSelect,
// 						})}
// 						placeholder={placeholder}
// 						value={value}
// 						onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
// 							onChange(event.target.value);
// 						}}
// 						onFocus={(_event: React.ChangeEvent<HTMLInputElement>) => {
// 							setOpenDropdown(true);
// 						}}
// 						withSearchSelect={!!searchSelect}
// 						withSearchResult={openDropdown}
// 					/>
// 					{!!value && <CloseLineIcon className="closeIcon" />}
// 				</div>
// 				{searchSelect && (
// 					<button type="button" className="searchIconContainer">
// 						<SearchIcon />
// 					</button>
// 				)}
// 			</SearchInputContainer>
// 			<DropdownContainer open={openDropdown} loadingOrNoData={loadingOrNodata}>
// 				{loadingOrNodata && <State state={loading ? "loading" : "nodata"} />}
//
// 				{options?.map((option) => {
// 					const { label, value, disabled, ...data } = option;
// 					return renderDropdownItem ? (
// 						<DropdownOptionContainer key={value} clickable={!disabled}>
// 							{renderDropdownItem({ data, label, value, disabled })}
// 						</DropdownOptionContainer>
// 					) : (
// 						<DropdownOption
// 							{...option}
// 							key={value}
// 							onSelect={(value: string) => {
// 								setOpenDropdown(false);
// 								dropdown?.onSelect?.(value, option);
// 							}}
// 						/>
// 					);
// 				})}
// 			</DropdownContainer>
// 		</div>
// 	);
// };
