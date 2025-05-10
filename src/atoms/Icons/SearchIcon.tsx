import React, { type FC } from "react";
import { ICON_CONFIG } from "./config";
import type { IconProps } from "./types";

export const SearchIcon: FC<IconProps> = ({
	size = "md",
	fill = "#000",
	className,
}) => {
	return (
		<svg
			{...ICON_CONFIG[size]}
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04Z"
				fill={fill}
			/>
		</svg>
	);
};
