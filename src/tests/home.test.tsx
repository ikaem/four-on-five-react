// src\tests\home.test.tsx

import { render, screen } from "@testing-library/react";

import { renderTestWrapper } from "./App.test";
import { mocks } from "../../testing/fake-data";

describe("Home page", () => {
  test("renders correct number of my matches when the component mountes", () => {
    renderTestWrapper(mocks);
    expect(screen.getByText(/(4 upcoming)/)).toBeInTheDocument();
  });
});
