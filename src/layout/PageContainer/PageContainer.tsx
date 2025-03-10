import type { FC, PropsWithChildren } from "react";

// TODO: fix PageLayout props
type Props = {
	fixed?: boolean;
};

// TODO: add stories first, then styled component and introduce props related style
export const PageContainer: FC<PropsWithChildren<Props>> = ({
	fixed = false,
}) => {
	return (
		<div>
			<div>This is PageContainer : wip</div>
		</div>
	);
};
