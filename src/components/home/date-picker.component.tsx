// src\components\home\date-picker.component.tsx

import React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

import { ReactComponent as CalendarIcon } from "../../assets/images/icons/calendar.svg";

import { COLORS } from "../../styles/global.style";
import formatDateTime from "../../helpers/format-date-time";

dayjs.extend(calendar);

interface DatePickerPropsI {
  handleSelectedDate: (dateISOString: string) => void;
}

const DatePicker: React.FC<DatePickerPropsI> = ({ handleSelectedDate }) => {
  const [currentCalendarDate, setCurrentCalendarDate] = React.useState(
    dayjs().toISOString()
  );

  const [isCalendarRendered, setIsCalendarRendered] = React.useState(false);

  const generateMonthDatesArray = (currentMonth: string) => {
    const monthStartDay = dayjs(currentCalendarDate).date(1).day();
    // const days = new Array(daysInMonth).fill("").map((_, index) => {
    const days = new Array(42).fill("").map((_, index) => {
      // the difference between index and current day
      const difference = index - monthStartDay;

      const currentDate = dayjs(currentCalendarDate)
        .date(1)
        .add(difference, "day");

      // return
      return currentDate.toISOString();
    });

    return days;
  };

  const assignMonthDatesClass = (day: string, currentCalendarDate: string) => {
    if (dayjs(day).month() === dayjs(currentCalendarDate).month())
      return "current-month-date";

    return "prev-next-month-date";
  };

  const generateWeekDays = () => {
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return dayNames;
  };

  const handleMoveCalendarDate = (
    timeSpan: "year" | "month",
    direction: "prev" | "next"
  ) => {
    switch (timeSpan) {
      case "year": {
        if (direction === "prev")
          return setCurrentCalendarDate((prev) => {
            return dayjs(prev).add(-1, "year").toISOString();
          });

        return setCurrentCalendarDate((prev) => {
          return dayjs(prev).add(1, "year").toISOString();
        });
      }

      case "month": {
        if (direction === "prev")
          return setCurrentCalendarDate((prev) => {
            return dayjs(prev).add(-1, "month").toISOString();
          });

        return setCurrentCalendarDate((prev) => {
          return dayjs(prev).add(1, "month").toISOString();
        });
      }

      default: {
        return;
      }
    }
  };

  const handleToggleRenderCalendar = () => {
    setIsCalendarRendered((prev) => !prev);
  };

  return (
    <DatePickerStyled
      COLORS={COLORS}
      className="dates-container_calendar-picker"
    >
      <button type="button" onClick={handleToggleRenderCalendar}>
        <span className="calendar-picker_label">Pick date</span>
        <CalendarIcon className="calendar-picker_icon" />
      </button>
      {isCalendarRendered && (
        <div className="calendar-picker_calendar-container">
          <button
            onClick={handleToggleRenderCalendar}
            className="calendar-container"
          >
            X
          </button>
          <div className="calendar-container_current-date-info">
            <div className="current-date-info_year">
              <button onClick={() => handleMoveCalendarDate("year", "prev")}>
                {"<"}
              </button>
              <span>{formatDateTime(currentCalendarDate, "year")}</span>
              <button onClick={() => handleMoveCalendarDate("year", "next")}>
                {">"}
              </button>
            </div>
            <div className="current-date-info_month">
              <button onClick={() => handleMoveCalendarDate("month", "prev")}>
                {"<"}
              </button>
              <span>{formatDateTime(currentCalendarDate, "month")}</span>
              <button onClick={() => handleMoveCalendarDate("month", "next")}>
                {">"}
              </button>
            </div>
          </div>
          <ul className="calendar-container_week-days">
            {generateWeekDays().map((day) => (
              <li>{day[0].toUpperCase()}</li>
            ))}
          </ul>
          <ul className="calendar-container_dates-list">
            {generateMonthDatesArray(currentCalendarDate).map((day, index) => (
              <li
                onClick={() => {
                  handleToggleRenderCalendar();
                  handleSelectedDate(dayjs(day).toISOString());
                }}
                className={assignMonthDatesClass(day, currentCalendarDate)}
              >
                {dayjs(day).format("D")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </DatePickerStyled>
  );
};

export default DatePicker;

const DatePickerStyled = styled.div<{ COLORS: typeof COLORS }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  margin-left: 1rem;

  span {
    margin-right: 0.5rem;
  }

  &:hover {
    color: ${({ COLORS }) => COLORS.greenBib};
  }

  .calendar-picker_calendar-container {
    /* display: none; */

    position: absolute;
    right: 1rem;
    padding: 1rem;
    background-color: white;
    > ul {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.5rem;
      justify-items: center;

      > li {
        &.prev-next-month-date {
          color: red;
        }
      }
    }
  }
`;
