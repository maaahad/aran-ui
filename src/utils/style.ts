export const positionPropToCSS = (
	value?: number | `${number}%` | "auto",
): number | string => {
	if (!value) return 0;

	if (typeof value === "number") return `${value}px`;

	return value;
};
