import React, { FC } from "react";
import Button from "../Button";
import { ButtonProps } from "../types.ts";

const Example: FC<ButtonProps> = ({ label, onClick = () => {} }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button onClick={onClick} label={label} />
    </div>
  );
};

export default Example;
