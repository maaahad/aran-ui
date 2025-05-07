import type { FC, ReactNode } from "react";
import { CloseLineIcon } from "../../atoms";
import type {
	ComponentProps,
	ComponentResponsiveProps,
	ComponentSize,
} from "../../utils/types";
import type { SelectOption } from "../Select/Select";
import { SearchContainer } from "./styled";

type Props = ComponentProps &
	ComponentSize &
	Omit<ComponentResponsiveProps, "pd"> & {
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
export const Search: FC<Props> = ({
	placeholder = "Search",
	searchSelect,
	searchResult,
	mt = 0,
	width = "auto",
}) => {
	//TODO: (maaahad) searchOptions should be implemented via Select component

	return (
		<SearchContainer mt={mt} width={width}>
			{searchSelect && <div>Select Search Options</div>}
			{!searchSelect && <div>Search Icon</div>}
			<input placeholder={placeholder} />
			<CloseLineIcon />
			{searchSelect && <div>Search Icon</div>}
		</SearchContainer>
	);
};
