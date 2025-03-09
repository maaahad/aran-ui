import React, { type ComponentProps, type FC } from "react";
import { PageLayout } from "../index";

type Props = ComponentProps<typeof PageLayout>;

const Example: FC<Props> = (props) => {
	return (
		<PageLayout {...props}>
			{/* TODO: add some more children content */}
			<div>Thsi is test</div>
		</PageLayout>
	);
};

export default Example;
