import type { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

// TODO: (maaahad) Extend on demand
// if none is provided, standard is considered,
// if both are given, width is given priority
type Props = {
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
  `}
`;

export const PageContainer: FC<PropsWithChildren<Props>> = ({
	width,
	children,
}) => {
	return <StyledContainer width={width}>{children}</StyledContainer>;
};
