import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
	useRef,
} from "react";
import { useClickOutside } from "../../hooks/window/useClickOutside";
import type { ComponentProps } from "../../utils/types";
import { DrawerContainer, type From, type Position } from "./styled";

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
	from?: From;
	zIndex?: number;

	// Callbacks
	onClose?: () => void;
	onClickOutside?: () => void;

	// Slots
	title?: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
};

const NEGATIVE_OFFSET = -200;

// TODO: (maaahad) forwardRef
export const Drawer: FC<PropsWithChildren<Props>> = ({
	children,
	onClose,
	onClickOutside,
	anchorEl,
	open = false,
	from = "left",
	zIndex = 0,
	className,
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	useClickOutside(ref, (event?: MouseEvent) => {
		if (event && !anchorEl?.isEqualNode(event.target as HTMLElement))
			onClickOutside?.();
	});

	// TODO: (maaahad) sync NEGATIVE_OFFSET height in case of top and bottom
	const position = useMemo(() => {
		const position: Position = {
			[from]: open ? 0 : NEGATIVE_OFFSET,
		};

		if (anchorEl) {
			const { bottom } = anchorEl.getBoundingClientRect();
			if (["left", "right"].includes(from)) {
				position.top = bottom;
				position.bottom = 0;
			} else {
				position.left = 0;
				position.right = 0;
			}
		}
		return position;
	}, [anchorEl, open, from]);

	return (
		<DrawerContainer
			className={className}
			ref={ref}
			from={from}
			position={position}
			zIndex={zIndex}
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
