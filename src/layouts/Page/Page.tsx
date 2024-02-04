import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";

export type PageProps = {
  variant?: "990" | "1280" | "fluid";
  className?: string;
};

// Padding value should come from config
const StyledPageUpdate = styled.div<Pick<PageProps, "variant">>`
  padding: 0px 16px;
  ${({ variant = "990" }) => {
    return css`
      width: ${variant === "fluid" ? "100%" : variant + "px"};
    `;
  }}
`;

const Page: React.FC<PropsWithChildren<PageProps>> = ({
  children,
  variant = "990",
  className,
}) => {
  return (
    <StyledPageUpdate className={className} variant={variant}>
      {children}
    </StyledPageUpdate>
  );
};

export default Page;
