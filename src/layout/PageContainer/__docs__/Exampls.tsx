import React, { type ComponentProps, type FC } from "react";
import { PageContainer } from "../index";

type Props = ComponentProps<typeof PageContainer>;

const Example: FC<Props> = (props) => {
	return (
		<PageContainer {...props}>
			{/* TODO: add some more children content */}
			<div>Thsi is test</div>
		</PageContainer>
	);
};

export default Example;
