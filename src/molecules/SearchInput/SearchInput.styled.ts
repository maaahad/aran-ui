import styled, { css, type DefaultTheme } from "styled-components";
import { SIZE_STYLES_CONFIG, getVariantConfig } from "../../config/styles";
import { applyResponsiveCSS } from "../../utils/style";
import type {
	ComponentResponsiveProps,
	ComponentSize,
	ComponentVariant,
} from "../../utils/types";

type ContainerProps = Omit<ComponentResponsiveProps, "pd"> &
	Required<ComponentSize> & {
		variant: ComponentVariant;
		isDirty: boolean;
		isDropdownOpen: boolean;
	};

const getVariantStyles = (
	theme: DefaultTheme,
	variant: ComponentVariant,
	isDropdownOpen: boolean,
) => {
	const variantConfig = getVariantConfig(theme)[variant];

	switch (variant) {
		case "outlined": {
			return css`
				background-color: ${variantConfig.backgroundColor}; 
				border: 1px solid ${variantConfig.line}; 
				${
					isDropdownOpen &&
					css`
				border-bottom-left-radius: 0; 
				border-bottom-right-radius: 0; 
				`
				}
`;
		}
		case "filled": {
			return css`
				background-color: ${variantConfig.backgroundColor}; 
				border: 1px solid ${variantConfig.line}; 

				${
					isDropdownOpen &&
					css`
				border-bottom-left-radius: 0; 
				border-bottom-right-radius: 0; 
				`
				}
`;
		}
		case "underlined": {
			return css`

				background-color: ${variantConfig.backgroundColor}; 
				border: 1px solid transparent; 
				border-bottom: 1px solid ${variantConfig.line}; 

				${
					isDropdownOpen &&
					css`
				`
				}
`;
		}
	}
};

export const Container = styled.div<ContainerProps>`
${applyResponsiveCSS}; 

${({ theme, size, variant, isDirty, isDropdownOpen }) => css`

.inputContainer {

	${
		variant !== "underlined" &&
		css`
	border-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	`
	}

	width: 100%; 
	height: ${SIZE_STYLES_CONFIG[size].height}; 
	position: relative; 
	display: flex; 
	flex-direction: row; 
	align-items: center; 
	justify-content: space-between; 
	// left + icon size + gap
        padding-left: calc(8px + 16px + 8px); 
        padding-right: ${isDirty ? "calc(8px + 16px + 8px)" : "8px"}; 
	transition: all .2s ease-in; 

	.searchIconContainer, .closeIconContainer {
		display: flex; 
		align-items: center; 
		justify-content: center;
	}

	.searchIconContainer {
		position: absolute; 
		left: 8px; 
		top: 0; 
		bottom: 0; 
	}


	.closeIconContainer {
		cursor: pointer; 
		position: absolute; 
		right: 8px; 
		top: 0; 
		bottom: 0; 
	}

	& > input {
		flex: 1; 
		border: none; 
		outline: none; 
		height: 100%; 
		background-color: transparent; 
	}

	&:hover {
		${
			variant === "underlined"
				? css`
			border-bottom: 1px solid ${theme.color.accent.secondary}; 
		`
				: css`
			border: 1px solid ${theme.color.accent.secondary}; 
			box-shadow: ${theme.elevation.sm}; 
		`
		}
	}

	${getVariantStyles(theme, variant, isDropdownOpen)}; 
}

.dropdown {
	height: fit-content; 
	padding: 4px 0 8px 0; 
	border: 1px solid ${theme.color.line}; 
	border-top: none; 
	border-bottom-right-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	border-bottom-left-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	box-shadow: ${theme.elevation.sm}; 
	display: flex; 
	flex-direction: column; 
}
`}

`;

export const DropdownItemContainer = styled.div<{ clickable: boolean }>`
${({ theme, clickable }) => css`
	padding: 8px; 
	transition: all .2s ease-in; 
	${
		clickable &&
		css`
	cursor: pointer; 
	`
	}
	&:hover {
		background-color: ${theme.color.background.secondary}; 
	}
`}
`;
