// src\tests\home.test.tsx

import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import dayjs from "dayjs";

import { renderTestWrapper } from "./App.test";
import { mocks } from "../../testing/fake-data";
import formatDateTime from "../helpers/format-date-time";

describe("Home page", () => {
  // beforeEach(cleanup);
  test("renders correct number of my matches when the component mountes", async () => {
    renderTestWrapper(mocks);

    await screen.findAllByText("");

    expect(await screen.findByText(/(4 upcoming)/)).toBeInTheDocument();
  });

  test("renders formatted today's date, selected in the DateSelector component", async () => {
    const today = dayjs().toISOString();
    const formattedToday = formatDateTime(today, "date");
    const regExpToday = new RegExp(formattedToday);

    renderTestWrapper();
    await screen.findAllByText("");

    expect(screen.getByText(regExpToday)).toBeInTheDocument();
  });

  test("renders formatted tomorrow's date when 'Tomorrow' button is clicked", async () => {
    const tomorrow = dayjs().add(1, "day").toISOString();
    const formattedTomorrow = formatDateTime(tomorrow, "date");
    const regExpTomorrow = new RegExp(formattedTomorrow);

    renderTestWrapper();
    await screen.findAllByText("");

    // click on the button
    userEvent.click(screen.getByRole("button", { name: /Tomorrow/ }));

    // update state again
    // await screen.findAllByText("");

    // assert that we have new date rendered
    expect(await screen.findByText(regExpTomorrow)).toBeInTheDocument();
  });
});
