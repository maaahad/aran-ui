import {
	FloatingFocusManager,
	autoUpdate,
	flip,
	size as floatingSize,
	offset,
	useFloating,
	useFocus,
	useInteractions,
} from "@floating-ui/react";
import cs from "classnames";
import type React from "react";
import {
	type FC,
	type PropsWithChildren,
	createContext,
	memo,
	useCallback,
	useContext,
} from "react";
import { useTheme } from "styled-components";
import { CloseLineIcon, SearchIcon } from "../../atoms";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
	ComponentVariant,
} from "../../utils/types";
import { Container, DropdownItemContainer } from "./SearchInput.styled";

/*
 * TODO:
 * 1. Add Generic type to SearchInput
 * 2. useContext to expose for ex. parent ref, to control the position of Dropdown and other state handle logic
 * 3. A separate component to render the Component in portal
 * */

type Props = ComponentProps &
	ComponentSize &
	Omit<ComponentResponsiveProps, "pd"> & {
		value?: string;
		onInputValueChange: (value: string) => void;
		variant?: ComponentVariant;
		open?: boolean;
	};

type InputProps = ComponentProps & {
	placeholder?: string;
};

type SearcInputContextType = {
	value?: string;
	onChange: (value: string) => void;
	floating: ReturnType<typeof useFloating>;
	interactions: ReturnType<typeof useInteractions>;
	isOpen: boolean;
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
	const theme = useTheme();
	const {
		value,
		onChange,
		floating: { refs },
	} = useSearchInputContext();

	const handleInputValueChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onChange(event.target.value);
		},
		[onChange],
	);

	if (!theme) {
		throw new Error("component should be used within AranThemeProvider");
	}

	return (
		<div className={cs(className, "inputContainer")} ref={refs.setReference}>
			<div className="searchIconContainer">
				<SearchIcon size="md" fill={theme.color.icon.secondary} />
			</div>
			<input
				value={value}
				onChange={handleInputValueChange}
				placeholder={placeholder}
			/>
			{value && (
				<div
					onClick={() => onChange("")}
					onKeyDown={() => {}}
					className="closeIconContainer"
				>
					<CloseLineIcon size="md" fill={theme.color.icon.secondary} />
				</div>
			)}
		</div>
	);
};

const DropdownItem: FC<PropsWithChildren<{ onClick?: () => void }>> = ({
	children,
	onClick,
}) => {
	return (
		<DropdownItemContainer
			onClick={onClick}
			onKeyDown={() => {}}
			clickable={!!onClick}
		>
			{children}
		</DropdownItemContainer>
	);
};

const Dropdown: FC<PropsWithChildren> = ({ children }) => {
	const {
		floating: { refs, floatingStyles, context },
		isOpen,
	} = useSearchInputContext();

	if (!isOpen) return;
	return (
		<FloatingFocusManager context={context} modal={false}>
			<div ref={refs.setFloating} style={floatingStyles} className="dropdown">
				{children}
			</div>
		</FloatingFocusManager>
	);
};

// TODO: (maaahad) Should it be renamed to combobox
const SearchInput: FC<PropsWithChildren<Props>> = ({
	children,
	className,
	value,
	onInputValueChange,
	variant = "outlined",
	size = "md",
	open = false, // NOTE: (maaahad) this is necessary?!! to control container style
	...styleProps
}) => {
	const floating = useFloating({
		// TODO: use it if we want to use SearchInput.Input as dropdownControl
		// open,
		// onOpenChange,
		whileElementsMounted: autoUpdate,
		middleware: [
			offset(0),
			flip(),
			floatingSize({
				apply({ rects, availableHeight, elements }) {
					Object.assign(elements.floating.style, {
						maxHeight: `${availableHeight}px`,
						minWidth: `${rects.reference.width}px`,
					});
				},
			}),
		],
	});

	const interactions = useInteractions([useFocus(floating.context)]);

	return (
		<SearchInputContext.Provider
			value={{
				value,
				onChange: onInputValueChange,
				floating,
				interactions,
				isOpen: open,
			}}
		>
			{/* TODO: (maaahad) do we need this additional div wrapper */}
			<Container
				className={className}
				{...styleProps}
				size={size}
				variant={variant}
				isDirty={!!value}
				isDropdownOpen={open}
			>
				{children}
			</Container>
		</SearchInputContext.Provider>
	);
};

export default {
	Root: memo(SearchInput),
	Input: memo(Input),
	Dropdown: memo(Dropdown),
	DropdownItem: memo(DropdownItem),
};
