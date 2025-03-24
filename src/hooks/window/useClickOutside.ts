import { type RefObject, useEffect } from "react";

export const useClickOutside = (
	ref: RefObject<HTMLElement | null>,
	callback?: (event?: MouseEvent) => void,
) => {
	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current?.contains(event.target as HTMLElement)) {
				callback?.(event);
			}
		};

		window.addEventListener("click", handleClick);

		return () => window.removeEventListener("click", handleClick);
	}, [ref, callback]);
};
