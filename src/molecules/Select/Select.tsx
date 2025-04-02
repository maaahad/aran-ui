import {
	type FC,
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

type Props = ComponentProps &
	ResponsiveProps &
	ComponentSize &
	ComponentState & {
		disabled?: boolean;
		formLabel?: string;
		placeholder?: string;
		// todo:
		// options

		// slots
		// events
	};

export const Select: FC<Props> = ({
	// className,
	// disabled = false,
	// state = "valid",
	formLabel,
	placeholder,
	// size = "md",
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
				<span>{placeholder ?? "Select"}</span>
				{/* TODO: this would be replace by CaretIcon */}
				<span>Caret Icon</span>
			</Button>

			{/* TODO: options list will use button as anchorEl */}
			{openDropdown && (
				<DropdownContainer ref={dropDownRef} {...dropdownStyle}>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
					<div>option </div>
				</DropdownContainer>
			)}
		</SelectContainer>
	);
};
