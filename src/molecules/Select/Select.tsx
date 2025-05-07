import {
	type FC,
	type ReactNode,
	type RefCallback,
	useCallback,
	useRef,
	useState,
} from "react";
import { CloseLineIcon } from "../../atoms";
import {
	Button,
	DropdownContainer,
	FormLabel,
	OptionContainer,
	SelectContainer,
	Slot,
	Span,
} from "./styled";

import { useClickOutside } from "../../hooks/window/useClickOutside";
import type {
	ComponentProps,
	ComponentSize,
	ComponentState,
	ComponentResponsiveProps,
} from "../../utils/types";

export type SelectOption = {
	label?: string;
	value: string;
	leftSlot?: ReactNode; // NOTE: a icon for example.
	rightSlot?: ReactNode; // NOTE: key / id of the option for example.
};

type Props = ComponentProps &
	ComponentResponsiveProps &
	ComponentSize &
	ComponentState & {
		disabled?: boolean;
		formLabel?: string;
		placeholder?: string;

		options: SelectOption[];
		selected?: SelectOption;
		onChange: (option?: SelectOption) => void;

		// slots
		// events
	};

type OptionProps = {
	onChange: () => void;
	option: SelectOption;
	isSelected?: boolean;
};
export const Option: FC<OptionProps> = ({ option, onChange, isSelected }) => {
	const { label, value, leftSlot, rightSlot } = option;

	return (
		<OptionContainer onClick={onChange}>
			<Slot>
				{leftSlot && <div>{leftSlot}</div>}
				<div>{label ?? value}</div>
			</Slot>
			<Slot>
				{/* TODO: (maaahad) replace with Tick icon */}
				{isSelected && <span>✓</span>}
				{rightSlot && <div>{rightSlot}</div>}
			</Slot>
		</OptionContainer>
	);
};

export const Select: FC<Props> = ({
	// disabled = false,
	// state = "valid",
	formLabel,
	placeholder,
	// size = "md",
	options,
	selected,
	onChange,
	...styleProps
}) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [dropdownStyle, setDropdownStyle] = useState<{
		top: number;
		left: number;
		width: number;
	}>({ top: 0, left: 0, width: 200 });

	const dropDownRef = useRef<HTMLDivElement>(null);

	useClickOutside(dropDownRef, () => setOpenDropdown(false));

	// TODO: (maaahad) we need to use ref instead to adjust dropdown on window resize, or may be not use fixed position
	// TODO: (maaahad) need to position the dropdown based on available space around the anchor el
	const callbackRef: RefCallback<HTMLButtonElement> = useCallback(
		(node: HTMLButtonElement) => {
			const rect = node.getBoundingClientRect();
			setDropdownStyle({
				top: rect.bottom + 8, // 8 used as gap between anchor el and dropdown
				left: rect.x,
				width: rect.right - rect.x,
			});
		},
		[],
	);

	const handleChange = useCallback(
		(option?: SelectOption) => {
			onChange(option);
			setOpenDropdown(false);
		},
		[onChange],
	);

	//TODO: we may not use SelectContainer if formLabel not provided
	// OR: may be defined a separate FormLabel component and the client would be responsible to use FormLabel if required

	return (
		<SelectContainer {...styleProps}>
			{/* TODO: (maaahad) a standalone component called FormLabel */}
			{formLabel && <FormLabel>{formLabel}</FormLabel>}

			{/* TODO: button should be replaced with icon button */}
			<Button
				ref={callbackRef}
				type="button"
				onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					event.stopPropagation();
					setOpenDropdown(!openDropdown);
				}}
			>
				{/* TODO: placeholder should have secondary color and need a styled span for this */}
				<Span isPlaceholder={!selected?.label}>
					{selected?.label ?? placeholder ?? "Select"}
				</Span>
				{/* TODO: this would be replace by CaretIcon */}
				<Slot>
					{/* TODO: (maaahad) should replace with IconButton with CloseIcon */}
					{selected && (
						<button type="button" onClick={() => handleChange()}>
							<CloseLineIcon size="md" />
						</button>
					)}
					{/*TODO: (maaahad) replace with CaretIcon */}
					<span>Caret Icon</span>
				</Slot>
			</Button>

			{openDropdown && (
				<DropdownContainer ref={dropDownRef} {...dropdownStyle}>
					{options.map((option) => (
						<Option
							key={option.value}
							option={option}
							onChange={() => handleChange(option)}
							isSelected={option.value === selected?.value}
						/>
					))}
				</DropdownContainer>
			)}
		</SelectContainer>
	);
};
