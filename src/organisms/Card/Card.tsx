import type { FC, PropsWithChildren, ReactNode } from "react";
import type { ComponentProps } from "../../utils/types";

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
	headerClassName,
	bodyClasName,
	footerClassName,
	header,
	children,
	footer,
}) => {
	return (
		<div>
			<div className={headerClassName}>{header}</div>
			<div className={bodyClasName}>{children}</div>
			<div className={footerClassName}>{footer}</div>
		</div>
	);
};
