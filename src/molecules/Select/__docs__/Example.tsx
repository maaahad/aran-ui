import React, { useState } from "react";
import type { ComponentProps, FC } from "react";
import { Select, type SelectOption } from "../Select";

type Props = ComponentProps<typeof Select>;

const Example: FC<Props> = (props) => {
	const [selected, setSelected] = useState<SelectOption | undefined>();
	const options: SelectOption[] = [
		{ value: "Value1", label: "label 1", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value2", label: "label 2", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value3", label: "label 3", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value4", label: "label 4", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value5", label: "label 5", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value6", label: "label 6", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value7", label: "label 7", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value8", label: "label 8", leftSlot: "ls", rightSlot: "rs" },
		{ value: "Value9", label: "label 9", leftSlot: "ls", rightSlot: "rs" },
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
