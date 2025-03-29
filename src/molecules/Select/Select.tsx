import React, {
	type FC,
	type RefCallback,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { Button } from "./styled";

import type {
	ComponentProps,
	ComponentSize,
	ComponentState,
	ComponentWidth,
} from "../../utils/types";
import { useClickOutside } from "../../hooks/window/useClickOutside";

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
	const [dropDownPosition, setDropdownPosition] = useState<{
		top: number;
		left: number;
	}>({ top: 0, left: 0 });
	const dropDownRef = useRef<HTMLDivElement>(null);

	useClickOutside(dropDownRef, () => setOpenDropdown(false));

	const callbackRef: RefCallback<HTMLButtonElement> = useCallback(
		(node: HTMLButtonElement) => {
			const rect = node.getBoundingClientRect();
			setDropdownPosition({
				top: rect.bottom + 8, // 8 used as gap between anchor el and dropdown
				left: rect.x,
			});
		},
		[],
	);

	return (
		<div>
			{label && <div>{label}</div>}
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
				<div
					ref={dropDownRef}
					style={{
						height: "200px",
						position: "fixed",
						top: `${dropDownPosition.top}px`,
						left: `${dropDownPosition.left}px`,
						width,
						backgroundColor: "#cbcbcb",
						// width: "200px",
					}}
				>
					<div>option 1</div>
					<div>option 2</div>
				</div>
			)}
		</div>
	);
};
