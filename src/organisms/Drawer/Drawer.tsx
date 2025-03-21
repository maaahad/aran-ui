import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
	useRef,
} from "react";
import { useClickOutside } from "../../hooks/window/useClickOutside";
import type { ComponentProps } from "../../utils/types";
import {
	Backdrop,
	DrawerContainer,
	DrawerContent,
	type From,
	type Position,
} from "./styled";

type Props = ComponentProps & {
	// class names
	bodyClassName?: string;

	// anchor element
	anchorEl: HTMLElement | null;

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

	// TODO: (maaahad) should we allow CSS to identify this based on from and anchorEl's bottom, thus can avoid string formatting
	const position = useMemo(() => {
		const position: Position = {
			[from]: open ? "0px" : "-100%",
		};

		if (anchorEl) {
			const { bottom } = anchorEl.getBoundingClientRect();
			if (["left", "right"].includes(from)) {
				position.top = `${bottom}px`;
				position.bottom = `${0}px`;
			} else {
				position.left = "0px";
				position.right = "0px";
			}
		}
		return position;
	}, [anchorEl, open, from]);

	// TODO: (maaahad) should we just use Container as Backdrop, otherwise we need some hack for border-radius to work
	return (
		<DrawerContainer
			className={className}
			ref={ref}
			from={from}
			position={position}
			zIndex={zIndex}
		>
			<DrawerContent from={from}>
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
			</DrawerContent>
			<Backdrop from={from} />
		</DrawerContainer>
	);
};
