import type { FC, PropsWithChildren, ReactNode } from "react";
import type { ComponentProps } from "../../utils/types";

type Props = ComponentProps & {
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

// TODO: implement the hide and seek at the end
export const Drawer: FC<PropsWithChildren<Props>> = ({ children, onClose }) => {
	return (
		<div>
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
		</div>
	);
};
