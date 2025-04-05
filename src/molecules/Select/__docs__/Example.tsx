import React, { useState } from "react";
import type { ComponentProps, FC } from "react";
import { Select, type SelectOption } from "../Select";

type Props = ComponentProps<typeof Select>;

const Example: FC<Props> = (props) => {
	const [selected, setSelected] = useState<SelectOption | undefined>(undefined);
	const options = [
		{ value: "Value1", label: "label 1" },
		{ value: "Value2", label: "label 2" },
		{ value: "Value3", label: "label 3" },
		{ value: "Value4", label: "label 4" },
		{ value: "Value5", label: "label 5" },
		{ value: "Value6", label: "label 6" },
		{ value: "Value7", label: "label 7" },
		{ value: "Value8", label: "label 8" },
		{ value: "Value9", label: "label 9" },
		{ value: "Value10", label: "label 10" },
	];
	return (
		<Select
			{...props}
			onChange={setSelected}
			selected={selected}
			options={options}
		/>
	);
};

export default Example;
