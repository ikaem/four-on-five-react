// src\App.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import { MockedProvider } from "@apollo/client/testing";

import App from "../App";

export const renderTestWrapper = (mocks: any[] = []) => {
  const Wrapper = () => (
    <Router>
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    </Router>
  );

  render(<Wrapper />);

  // then click on the Home link to go home immediately, and not stay at the last route...
  userEvent.click(screen.getByText(/Home/));
};

test("heloo", () => {});

describe("Application", () => {
  test("renders correctly", async () => {
    renderTestWrapper();
    await screen.findAllByText("");
  });
});

describe("Header component", () => {
  test("navigates to Home when 'home' link is clicked", async () => {
    renderTestWrapper();
    await screen.findAllByText("");

    // click create match button to navigate away
    userEvent.click(screen.getByText(/Create match/));

    // then click on the Home link
    userEvent.click(screen.getByText(/Home/));
    await screen.findAllByText("");

    // assert that we are on the home page
    expect(screen.getByText(/My matches/)).toBeInTheDocument();
  });
});

describe("ProfileBar component", () => {
  test("navigates to EditMatch component when 'Create Match' link is clicked", async () => {
    renderTestWrapper();
    await screen.findAllByText("");

    userEvent.click(screen.getByText(/Create match/));

    expect(screen.getByText(/Create new match/)).toBeInTheDocument();
    // test style here
    expect(screen.getByText(/Create new match/)).toHaveStyle({
      textTransform: "uppercase",
    });
  });
});
