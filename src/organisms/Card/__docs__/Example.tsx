import React, { type FC, type ComponentProps } from "react";
import { Card } from "../Card";

type Props = Omit<ComponentProps<typeof Card>, "children">;

const Example: FC<Props> = (props) => {
	return (
		<Card {...props}>
			<h2>Card Content</h2>
			<div>Card Content</div>
		</Card>
	);
};

export default Example;
