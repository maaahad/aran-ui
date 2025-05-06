import type { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import type { ComponentProps } from "../../utils/types";

// TODO: (maaahad) Extend on demand
// if none is provided, standard is considered,
// if both are given, width is given priority
type Props = ComponentProps & {
	width?: "fluid" | "standard" | "large";
};

const PROPS_TO_STYLE: {
	[key in Required<Props>["width"]]: string;
} = {
	fluid: "100%",
	standard: "990px",
	large: "1280px",
};

// TODO: (maaahad) padding should come from common size tokens
const StyledContainer = styled.div<Props>`
  ${({ width = "standard" }) => css`
    padding: 0 16px; 
    width: ${PROPS_TO_STYLE[width]};
    margin-left: auto;
    margin-right: auto; 
  `}
`;

export const PageContainer: FC<PropsWithChildren<Props>> = ({
	width = "standard",
	children,
	...passThroughProps
}) => {
	return (
		<StyledContainer {...passThroughProps} width={width}>
			{children}
		</StyledContainer>
	);
};
