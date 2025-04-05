import {
	type FC,
	type ReactNode,
	type RefCallback,
	useCallback,
	useRef,
	useState,
} from "react";
import {
	Button,
	DropdownContainer,
	FormLabel,
	OptionContainer,
	Ring,
	SelectContainer,
	Slot,
} from "./styled";

import { useClickOutside } from "../../hooks/window/useClickOutside";
import type {
	ComponentProps,
	ComponentSize,
	ComponentState,
	ResponsiveProps,
} from "../../utils/types";

export type SelectOption = {
	label?: string;
	value: string;
	leftSlot?: ReactNode; // NOTE: a icon for example.
	rightSlot?: ReactNode; // NOTE: key / id of the option for example.
};

type Props = ComponentProps &
	ResponsiveProps &
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

	// TODO: (maaahad) this might not necessary, instead can be achieve by callback ref
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

	return (
		<SelectContainer {...styleProps}>
			{/* TODO: (maaahad) a standalone component called FormLabel */}
			{formLabel && <FormLabel>{formLabel}</FormLabel>}

			{/* TODO: button should be replaced with icon button */}
			<Button
				// ref={anchorRef} // TODO: should we use callback ref instead
				ref={callbackRef}
				type="button"
				onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					event.stopPropagation();
					setOpenDropdown(!openDropdown);
				}}
				role="combobox" // TODO: remove this warning
			>
				{/* TODO: placeholder should have secondary color and need a styled span for this */}
				<span>{selected?.label ?? placeholder ?? "Select"}</span>
				{/* TODO: this would be replace by CaretIcon */}
				<Slot>
					{/* TODO: (maaahad) should replace with Cross and Caret icon */}
					{selected && <div onClick={() => handleChange()}>X</div>}
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
