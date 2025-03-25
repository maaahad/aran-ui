import type { FC, PropsWithChildren, ReactNode } from "react";
import type { ComponentProps } from "../../utils/types";
import { Body, CardContainer, Footer, Header } from "./styled";

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
			{header && <Header className={headerClassName}>{header}</Header>}
			<Body className={bodyClasName}>{children}</Body>
			{footer && <Footer className={footerClassName}>{footer}</Footer>}
		</CardContainer>
	);
};
