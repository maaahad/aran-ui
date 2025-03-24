import React, {
	type FC,
	type PropsWithChildren,
	type ComponentProps,
	useState,
	useRef,
} from "react";
import { Drawer } from "../Drawer";

type Props = PropsWithChildren<
	Omit<ComponentProps<typeof Drawer>, "open" | "onClose">
>;

const Example: FC<Props> = ({ children, ...otherDrawerProps }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLButtonElement>(null);

	return (
		<div
			style={{
				width: "100%",
				minHeight: "50vh",
				backgroundColor: "#cbcbcb",
				padding: "8px 16px",
			}}
		>
			<button
				onClick={() => setOpen((open) => !open)}
				type="button"
				style={{
					height: "40px",
					padding: "16px",
					display: "flex",
					alignItems: "center",
					cursor: "pointer",
				}}
				ref={ref}
			>
				Open Drawer
			</button>
			<Drawer
				anchorEl={ref.current}
				open={open}
				onClose={() => setOpen(false)}
				onClickOutside={() => setOpen(false)}
				{...otherDrawerProps}
			>
				{children}
			</Drawer>
		</div>
	);
};

export default Example;
