import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
	useRef,
} from "react";
import type { ComponentProps } from "../../utils/types";
import {
	DrawerContainer,
	DrawerContent,
	EmptyContent,
	type From,
} from "./styled";

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

	const anchorElBottom = useMemo(() => {
		if (anchorEl) {
			const { bottom } = anchorEl.getBoundingClientRect();
			return bottom;
		}
		return 0;
	}, [anchorEl]);

	return (
		<DrawerContainer
			className={className}
			ref={ref}
			from={from}
			zIndex={zIndex}
			open={open}
			anchorElBottom={anchorElBottom}
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
			<EmptyContent from={from} onClick={onClickOutside} />
		</DrawerContainer>
	);
};
