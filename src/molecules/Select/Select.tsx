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
	SelectContainer,
} from "./styled";

import { useClickOutside } from "../../hooks/window/useClickOutside";
import type {
	ComponentProps,
	ComponentSize,
	ComponentState,
	ComponentWidth,
} from "../../utils/types";

// TODO: (maaahad) implement ComponentWidth
// VVI : (maaahad)
// TODO: (maaahad) generic implement of ComponentSize/Width/State so that component using this props, will get the style automatically
type Props = ComponentProps &
	ComponentWidth &
	ComponentSize &
	ComponentState & {
		disabled?: boolean;
		label?: string;
		// todo:
		// options

		// slots
		// events
	};

export const Select: FC<Props> = ({
	className,
	disabled = false,
	state = "valid",
	label,
	size = "md",
	width = "auto",
}) => {
	const [openDropdown, setOpenDropdown] = useState<boolean>(false);
	const [dropdownStyle, setDropdownStyle] = useState<{
		top: number;
		left: number;
		width: number | "auto";
	}>({ top: 0, left: 0, width: "auto" });

	const dropDownRef = useRef<HTMLDivElement>(null);

	// TODO: this might not necessary, instead can be achieve by callback ref
	useClickOutside(dropDownRef, () => setOpenDropdown(false));

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
		<SelectContainer width={width}>
			{/* TODO: (maaahad) a standalone component called FormLabel */}
			{label && <FormLabel>{label}</FormLabel>}

			{/* TODO: button should be replaced with icon button */}
			<Button
				// ref={anchorRef} // TODO: should we use callback ref instead
				ref={callbackRef}
				type="button"
				onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
					event.stopPropagation();
					setOpenDropdown(!openDropdown);
				}}
			>
				<span>Default value</span>
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
