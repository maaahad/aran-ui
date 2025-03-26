import type { PropsWithChildren, ReactNode } from "react";
import React from "react";
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

export const Card = React.forwardRef<
	HTMLElement | React.RefCallback<HTMLElement>,
	PropsWithChildren<Props>
>(
	(
		{
			className,
			headerClassName,
			bodyClasName,
			footerClassName,
			header,
			children,
			footer,
		},
		ref,
	) => {
		return (
			<CardContainer className={className} ref={ref as any}>
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
	},
);
