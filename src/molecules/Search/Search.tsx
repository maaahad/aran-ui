import type { FC, ReactNode } from "react";
import { CloseLineIcon } from "../../atoms";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";
import type { SelectOption } from "../Select/Select";

type Props = ComponentProps &
	ComponentSize &
	ComponentResponsiveProps & {
		searchSelect?: {
			onChangeSearchOption: (value: string) => void;
			options: (SelectOption & {
				icon: ReactNode;
			})[];
		};
		placeholder?: string;
		searchResult?: {
			todo: string;
		};
	};

//TODO: (maaahad) on second iteration, try with Compound Component pattern
//TODO: (maaahad) add result dropdown
export const Search: FC<Props> = ({ placeholder = "Search", searchSelect }) => {
	//TODO: (maaahad) searchOptions should be implemented via Select component

	return (
		<div>
			{searchSelect && <div>Select Search Options</div>}
			{!searchSelect && <div>Search Icon</div>}
			<input placeholder={placeholder} />
			<CloseLineIcon />
			{searchSelect && <div>Search Icon</div>}
		</div>
	);
};
