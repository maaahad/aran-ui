import type { FC, ReactNode } from "react";
import type {
	ComponentSize,
	ComponentProps,
	ComponentResponsiveProps,
} from "../../utils/types";
import { CloseLineIcon } from "../../atoms";

type Props = ComponentProps &
	ComponentSize &
	ComponentResponsiveProps & {
		searchIcon?: ReactNode; // default to SearchIcon
		placeholder?: string;
	};

export const Search: FC<Props> = ({ placeholder = "Search", searchIcon }) => {
	return (
		<div>
			<div>{searchIcon}</div>
			<input placeholder={placeholder} />
			<CloseLineIcon />
		</div>
	);
};
