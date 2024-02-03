import React from "react";
import { describe, it } from "vitest";
import { render } from "@testing-library/react";
import Page from "../Page";

describe("Page layout", () => {
  it("page should render correctly", () => {
    render(<Page variant="fluid" />);
    // TODO (maaahad) : add remaining part of test later
  });
});
