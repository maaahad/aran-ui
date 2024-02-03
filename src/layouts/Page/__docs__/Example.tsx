import React from "react";
import Page, { PageProps } from "../Page";

const Example: React.FC<PageProps> = ({ variant = "990", ...props }) => {
  return (
    <Page variant={variant} {...props}>
      <div
        style={{
          border: "1px solid green",
          borderRadius: "8px",
          margin: "0 -16px", // cancelling out parent horizontal padding
          padding: "0 16px",
        }}
      >
        <div>A child inside Page</div>
        <div>A child inside Page</div>
        <div>A child inside Page</div>
        <div>A child inside Page</div>
        <div>A child inside Page</div>
      </div>
    </Page>
  );
};

export default Example;
