import type { PropsWithChildren, ReactNode } from "react";
import React from "react";
import type { ComponentProps, ResponsiveProps } from "../../utils/types";
import { Body, CardContainer, Slot } from "./styled";

type Props = ComponentProps &
	ResponsiveProps & {
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
			// NOTE: pd is control in Slot and Body container
			// pd,
			...styleProps
		},
		ref,
	) => {
		return (
			<CardContainer className={className} ref={ref as any} {...styleProps}>
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
