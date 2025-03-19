import { type FC, type PropsWithChildren, type ReactNode, useRef } from "react";
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
	footer?: ReactNode;
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
	const ref = useRef<HTMLDivElement>(null);
	useClickOutside(ref, (event?: MouseEvent) => {
		if (event && !anchorEl?.isEqualNode(event.target as HTMLElement))
			onClickOutside?.();
	});

	return (
		<DrawerContainer open={open} className={className} ref={ref}>
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
