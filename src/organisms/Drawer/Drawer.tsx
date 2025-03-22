import {
	type FC,
	type PropsWithChildren,
	type ReactNode,
	useMemo,
	useRef,
} from "react";
import type { ComponentProps } from "../../utils/types";
import {
	Body,
	DrawerContainer,
	DrawerContent,
	EmptyContent,
	Footer,
	type From,
	Header,
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
	footer,
	showCloseIcon,
	header,
}) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const anchorElBottom = useMemo(() => {
		if (anchorEl) {
			const { bottom } = anchorEl.getBoundingClientRect();
			return bottom;
		}
		return 0;
	}, [anchorEl]);

	const shouldRenderHeader = header || (showCloseIcon && onClose);

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
				{shouldRenderHeader && (
					<Header>
						{header && <div>{header}</div>}
						{/* TODO: close icon would be rendered using IconButton */}
						{showCloseIcon && onClose && (
							<button type="button" onClick={onClose}>
								X
							</button>
						)}
					</Header>
				)}

				<Body>{children}</Body>

				{footer && <Footer>{footer}</Footer>}
			</DrawerContent>
			<EmptyContent from={from} onClick={onClickOutside} />
		</DrawerContainer>
	);
};
