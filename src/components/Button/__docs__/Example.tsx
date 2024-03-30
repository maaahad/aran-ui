import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types.ts";

const Example: FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button {...props} />
    </div>
  );
};

export default Example;
