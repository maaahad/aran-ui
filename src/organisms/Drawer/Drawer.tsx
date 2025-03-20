import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	RefObject,
	createRef,
	useCallback,
	useMemo,
	useRef,
	useState,
} from "react";
import { useClickOutside } from "../../hooks/window/useClickOutside";
import type { ComponentProps } from "../../utils/types";
import { DrawerContainer } from "./styled";

type Props = ComponentProps & {
	// class names
	bodyClassName?: string;

	// anchor element
	anchorEl?: HTMLElement | null;

	// props
	open?: boolean;
	stickyHeader?: boolean;
	stickyFooter?: boolean;
	showCloseIcon?: boolean;
	from?: "left" | "right" | "top" | "bottom";

	// Callbacks
	onClose?: () => void;
	onClickOutside?: () => void;
	// TODO: (maaahad) onClickOutside

	// Slots
	title?: ReactNode;
	header?: ReactNode;
	footer?: Rea;
};

// TODO: (maaahad) forwardRef
export const Drawer: FC<PropsWithChildren<Props>> = ({
	children,
	onClose,
	onClickOutside,
	anchorEl,
	open = false,
	from = "left",
	className,
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useClickOutside(ref, (event?: MouseEvent) => {
		if (event && !anchorEl?.isEqualNode(event.target as HTMLElement))
			onClickOutside?.();
	});

	// TODO: we need to calculate top, bottom, left and bottom, based on `from` props
	// TODO: this top should be removed
	const top = useMemo(() => {
		if (anchorEl) return anchorEl.getBoundingClientRect().bottom;
		return 0;
	}, [anchorEl]);

	// TODO: generalize and clean up
	const position = useMemo(() => {
		const position: {
			[key in "top" | "bottom" | "left" | "right"]?: number;
		} =
			// TODO: generalize it for other from value
			from === "left"
				? {
						left: open ? 0 : -200,
					}
				: {
						right: open ? 0 : -200,
					};

		if (anchorEl) {
			const { bottom } = anchorEl.getBoundingClientRect();
			if (["left", "right"].includes(from)) {
				position.top = bottom;
				position.bottom = 0;
			}
			// TODO: add support for other from values
		}
		return position;
	}, [anchorEl, open, from]);

	console.log(position, top);

	return (
		<DrawerContainer
			open={open}
			className={className}
			ref={ref}
			top={top}
			from={from}
			position={position}
		>
			{/* header */}
			<div>
				<div>Header or title</div>
				<button onClick={onClose} type="button">
					X
				</button>
			</div>
			{/* body */}
			<div>{children}</div>
			{/* footer */}
			<div>Footer</div>
		</DrawerContainer>
	);
};
