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
	Ring,
	SelectContainer,
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
		onChange: (option: SelectOption) => void;

		// slots
		// events
	};

export const Option: FC<{ option: SelectOption; onChange: () => void }> = ({
	option,
	onChange,
}) => {
	const { label, value, leftSlot, rightSlot } = option;
	return (
		<button onClick={onChange} type="button">
			{/* TODO: do we need extra div for slot? */}
			{leftSlot && <div>{leftSlot}</div>}
			<div>{label ?? value}</div>
			{rightSlot && <div>{rightSlot}</div>}
		</button>
	);
};

export const Select: FC<Props> = ({
	// className,
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
				<span>{selected?.label ?? placeholder ?? "Select"}</span>
				{/* TODO: this would be replace by CaretIcon */}
				<span>Caret Icon</span>
			</Button>

			{/* TODO: options list will use button as anchorEl */}
			{openDropdown && options.length > 0 && (
				<DropdownContainer ref={dropDownRef} {...dropdownStyle}>
					{options.map((option) => (
						<Option
							key={option.value}
							option={option}
							onChange={() => onChange(option)}
						/>
					))}
				</DropdownContainer>
			)}
		</SelectContainer>
	);
};
