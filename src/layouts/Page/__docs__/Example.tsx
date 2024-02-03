import React from "react";
import Page, { PageProps } from "../Page";

const Example: React.FC<PageProps> = ({ variant = "990", ...props }) => {
  return (
    <Page variant={variant} {...props}>
      <div>A child inside Page</div>
      <div>A child inside Page</div>
      <div>A child inside Page</div>
      <div>A child inside Page</div>
      <div>A child inside Page</div>
    </Page>
  );
};

export default Example;
