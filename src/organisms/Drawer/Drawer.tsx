import type { FC, PropsWithChildren, ReactNode } from "react";
import type { ComponentProps } from "../../utils/types";
import { DrawerContainer } from "./styled";

type Props = ComponentProps & {
	// class names
	bodyClassName?: string;

	// props
	open?: boolean;
	stickyHeader?: boolean;
	stickyFooter?: boolean;
	showCloseIcon?: boolean;

	// Callbacks
	onClose?: () => void;

	// Slots
	title?: ReactNode;
	header?: ReactNode;
	footer?: ReactNode;
};

// TODO: (maaahad) forwardRef
export const Drawer: FC<PropsWithChildren<Props>> = ({
	children,
	onClose,
	open,
	className,
}) => {
	return (
		<DrawerContainer open={open} className={className}>
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
