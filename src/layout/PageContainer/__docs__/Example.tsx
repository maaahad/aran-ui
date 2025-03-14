import React, {
	type ComponentProps,
	type FC,
	type PropsWithChildren,
} from "react";
import { PageContainer } from "../index";

type Props = PropsWithChildren<ComponentProps<typeof PageContainer>>;

const Example: FC<Props> = ({ children, ...otherProps }) => {
	return (
		<PageContainer {...otherProps}>
			<div
				style={{
					backgroundColor: "blue",
					color: "green",
					width: "10px",
				}}
			>
				{children}
			</div>
		</PageContainer>
	);
};

export default Example;
