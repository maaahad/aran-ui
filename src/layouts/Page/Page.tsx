import React, { PropsWithChildren } from "react";
import styled from "styled-components";

export type PageProps = {
  variant: "fixed" | "fluid";
};

const StyledPage = styled.div`
  width: 100%;
  background-color: red;
`;

const Page: React.FC<PropsWithChildren<PageProps>> = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
