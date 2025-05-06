import type { FC, ReactNode } from "react";
import type {
	ComponentSize,
	ComponentProps,
	ResponsiveProps,
} from "../../utils/types";
import { CloseLineIcon } from "../../atoms";

type Props = ComponentProps &
	ComponentSize &
	ResponsiveProps & {
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
