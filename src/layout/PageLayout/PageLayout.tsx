import type { PropsWithChildren, FC } from "react";

// TODO: fix PageLayout props
type Props = {
	fixed?: boolean;
};

// TODO: add stories first, then styled component and introduce props related style
export const PageLayout: FC<PropsWithChildren<Props>> = ({ fixed = false }) => {
	return (
		<div>
			<div>This is PageLayout : wip</div>
		</div>
	);
};
