import type { FC } from "react";
import type { IconProps } from "./types";
import { ICON_CONFIG } from "./config";

// NOTE: ref: https://gitlab-org.gitlab.io/gitlab-svgs/

export const CloseLineIcon: FC<IconProps> = ({
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
			fill="none"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22Z"
				fill={fill}
			/>
		</svg>
	);
};
