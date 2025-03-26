import type { FC, PropsWithChildren, ReactNode } from "react";
import type { ComponentProps } from "../../utils/types";
import { Body, CardContainer, Slot } from "./styled";

type Props = ComponentProps & {
	// className
	headerClassName?: string;
	bodyClasName?: string;
	footerClassName?: string;
	// slots
	header?: ReactNode;
	footer?: ReactNode;
};

export const Card: FC<PropsWithChildren<Props>> = ({
	className,
	headerClassName,
	bodyClasName,
	footerClassName,
	header,
	children,
	footer,
}) => {
	return (
		<CardContainer className={className}>
			{header && (
				<Slot slot="header" className={headerClassName}>
					{header}
				</Slot>
			)}
			<Body className={bodyClasName}>{children}</Body>
			{footer && (
				<Slot slot="footer" className={footerClassName}>
					{footer}
				</Slot>
			)}
		</CardContainer>
	);
};
