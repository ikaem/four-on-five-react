// src\tests\home.test.tsx

import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
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

  test("does not render calendar initially", async () => {
    const currentDateFormat = dayjs().format("<YYYY><MMMM>");

    // render the app
    renderTestWrapper();

    // update the state
    await screen.findAllByText("");

    // assertion
    expect(
      screen.queryByText((_, node) => {
        return node?.textContent === currentDateFormat;
      })
    ).toBeNull();
  });

  test("renders calendar when Pick date button is clicked", async () => {
    const currentDateFormat = dayjs().format("<YYYY><MMMM>");

    renderTestWrapper();
    await screen.findAllByText("");

    // click the button now

    userEvent.click(screen.getByRole("button", { name: /Pick date/ }));

    // await screen.findAllByText("");

    // assertion
    expect(
      await screen.findByText((_, node) => {
        return node?.textContent === currentDateFormat;
      })
    ).toBeInTheDocument();
  });

  test("does not render calendar when Close button on the calendar is clicked", async () => {
    const currentDateFormat = dayjs().format("<YYYY><MMMM>");

    renderTestWrapper();
    await screen.findAllByText("");

    // click the button to open the calendar
    userEvent.click(screen.getByRole("button", { name: /Pick date/ }));

    // update the state again
    await screen.findAllByText("");

    // select the whole calendar
    const calendar = document.querySelector(
      ".calendar-picker_calendar-container"
    ) as HTMLDivElement;

    // define calendar screen
    const calendarScreen = within(calendar);

    // select button within the calendar and click on it
    userEvent.click(calendarScreen.getByRole("button", { name: "X" }));

    // wait for update state yet again
    await screen.findAllByText("");

    // assert that the calendar is gone
    // maybe can even use the calendar screen?

    // screen.debug();

    expect(
      screen.queryByText((_, node) => {
        return node?.textContent === currentDateFormat;
      })
    ).toBeNull();
  });

  test("renders selected date and closes the calendar when a date on the calendar is clicked", async () => {
    const currentDateFormat = dayjs().format("<YYYY><MMMM>");

    // format first day of the current month as the full date
    const fullFormatedFirstDate = formatDateTime(
      dayjs().date(1).toISOString(),
      "date"
    );
    const regExFormatedDate = new RegExp(fullFormatedFirstDate);

    console.log("dateeeeeeeeeee", fullFormatedFirstDate);

    renderTestWrapper();
    await screen.findAllByText("");

    // open the calendar
    userEvent.click(screen.getByRole("button", { name: /Pick date/ }));

    // update the state again
    await screen.findAllByText("");

    // select ul with dates from the calendar
    const datesList = document.querySelector(
      ".calendar-container_dates-list"
    ) as HTMLUListElement;

    // convert the list to a screen
    const datesListScreen = within(datesList);

    // select first first date item from the list and click on it
    userEvent.click(datesListScreen.getAllByText("1")[0]);

    // update the state again
    await screen.findAllByText("");

    // assert that the calendar is not rendered
    expect(
      screen.queryByText((_, node) => {
        return node?.textContent === currentDateFormat;
      })
    ).toBeNull();

    // assert that the full date is rendered
    expect(screen.getByText(regExFormatedDate)).toBeInTheDocument();
  });
});
