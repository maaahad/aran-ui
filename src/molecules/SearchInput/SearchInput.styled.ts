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
	// NOTE: (maaahad) height should be adjusted later
	height: 200px; 
	padding: 8px; 
	// background-color: ${theme.color.background.secondary}; 
	border: 1px solid ${theme.color.line}; 
	border-top: none; 
	border-bottom-right-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	border-bottom-left-radius: ${SIZE_STYLES_CONFIG[size].borderRadius}; 
	box-shadow: ${theme.elevation.sm}; 
}
`}

`;
//FIXME: (maaahad) all abslute value should come from config. for ex. padding, width, height etc
// FIXME: (maaahad) add border radius in theme and used instead of hardcoded value
// NOTE: (maaahad) height comes from config based on size prop
export const SearchInputContainer = styled.div<
	Omit<ComponentResponsiveProps, "pd"> & { withDropdown: boolean }
>`
${applyResponsiveCSS}; 

${({ theme, withDropdown }) => css`
height: 32px;
display: flex; 
flex-direction: row; 
align-items: center; 

.inputContainer {
	height: 100%; 
	flex: 1; 
	position: relative; 
	display: flex; 
	flex-direction: row; 
	align-items: center; 
}

.inputContainer > .searchIcon {
	position: absolute; 
	left: 8px; 
}

.inputContainer > .closeIcon {
	position: absolute; 
	right: 8px; 
}

.searchSelectContainer {
	height: 100%;  
	width: 48px; 
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${theme.color.line};
	border-right: 1px solid transparent; 
	border-top-left-radius: ${theme.borderRadius.sm}; 
	${
		!withDropdown &&
		css`
	border-bottom-left-radius: ${theme.borderRadius.sm}; 
	`
	}
}

.searchSelectContainer:focus{
	border-right: 1px solid ${theme.color.line};
	border-color: ${theme.color.accent.secondary}; 
}

.searchIconContainer {
	cursor: pointer; 
	height: 100%; 
	width: 32px;
	display: flex; 
	align-items: center; 
	justify-content: center; 
	border: 1px solid ${theme.color.line};
	border-left: 1px solid transparent; 
	border-top-right-radius: ${theme.borderRadius.sm};
	${
		!withDropdown &&
		css`
	border-bottom-right-radius: ${theme.borderRadius.sm}; 
	`
	}

}

.searchIconContainer:focus{
	border-left: 1px solid ${theme.color.line};
	border-color: ${theme.color.accent.secondary}; 
}

.searchIconContainer:hover {
	background-color: ${theme.color.background.secondary}; 
}
`}
`;

//TODO: (maaahad) padding 8px around input,
// FIXME: (maaahad) should come from config
// TODO: (maaahad) do proper calculation of padding !!!!
export const StyledInput = styled.input<{
	withSearchSelect: boolean;
	withSearchResult: boolean;
}>`
${({ theme, withSearchSelect, withSearchResult }) => css`
height: 100%; 
border: none; 
padding: 8px 32px 8px 32px; 
flex: 1; 
outline: none; 
border: 1px solid ${theme.color.line};

${
	!withSearchSelect &&
	css`
border-radius: ${theme.borderRadius.sm}; 
`
}

${
	withSearchResult &&
	css`
border-bottom-left-radius: 0; 
border-bottom-right-radius: 0; 
`
}

&:focus{
	border-color: ${theme.color.accent.secondary}; 
}

&.withSearchSelect {
	padding-left: 16px; 
}
`}
`;

export const DropdownContainerOld = styled.div<{
	open: boolean;
	loadingOrNoData: boolean;
}>`
${({ theme, open, loadingOrNoData }) => css`
height: 0; 
overflow: hidden; 
display: flex; 
flex-direction: column; 
gap: 4px; 
${
	open &&
	css`
background-color: ${theme.color.background.primary}; 
border: 1px solid ${theme.color.line}; 
border-top: none; 
border-bottom-right-radius: ${theme.borderRadius.sm}; 
border-bottom-left-radius: ${theme.borderRadius.sm}; 
padding: 8px;
height: 200px; 
${
	loadingOrNoData &&
	css`
height: 50px; 
align-items: center; 
justify-content: center;
`
}
box-shadow: ${theme.elevation.sm}; 
`
}
`}
`;

export const StateStyled = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const DropdownOptionContainer = styled.button<{ clickable: boolean }>`
${({ theme, clickable }) => css`
padding: 8px;
border: none; 
background-color: transparent; 
display: flex; 
justify-content: flex-start; 
&:hover {
	${
		clickable &&
		css`
	cursor: pointer; 
	background-color: ${theme.color.background.secondary}; 
	`
	}
}
`}
`;
