// src\components\home\date-picker.component.tsx

import styled from "styled-components";
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";

import { ReactComponent as CalendarIcon } from "../../assets/images/icons/calendar.svg";

import { COLORS } from "../../styles/global.style";

dayjs.extend(calendar);

const DatePicker: React.FC = () => {
  const currentMonth = "2021-01-07T08:53:13.268Z";
  const currentCalendarDate = "2021-01-07T08:53:13.268Z";

  // const monthStart = dayjs().date(1);
  // const daysInCurrentMonth = dayjs("Feb 01 2021").daysInMonth();

  // console.log("month start", monthStart);
  // console.log("month days", daysInCurrentMonth);

  const generateMonthDatesArray = (currentMonth: string) => {
    const daysInMonth = dayjs(currentMonth).daysInMonth();
    const monthStartDay = dayjs(currentMonth).date(1).day();
    // const days = new Array(daysInMonth).fill("").map((_, index) => {
    const days = new Array(42).fill("").map((_, index) => {
      // we can check what is the day
      // and we can move it to the correct day forward, depending on the difference between the current day and real day
      // we can just calculate the difference between the positions
      // we can actually return the number of date

      // so i could keep returning empty object until the current date's day is not 1 - but that would account only for monday

      // actually, i could always create the current date
      // then i check its day
      // then i check what day does the month start
      // and then i set the first date to have that index

      // find the day of the first date of the month
      // const firstDate = dayjs(currentMonth).date(1)

      // if the index is lower than the first day of the month, return empty
      // if (index < monthStartDay) {
      // this accounts for leftovers from previous month
      // const prevMonthCurrentDate = dayjs(currentMonth)
      //   .date(1)
      //   .add(-index, "day");
      // }

      // here, index should be reduced by the difference between month start day and index

      // the difference
      const difference = index - monthStartDay;

      console.log("the difference", difference);

      const currentDate = dayjs(currentMonth).date(1).add(difference, "day");

      // console.log("this is current date", currentDate.day());

      // return
      return currentDate.toISOString();
    });
    console.log("this is when the month starts, day name", monthStartDay);
    console.log("the array", days);
    return days;
  };

  // generateMonthDatesArray(currentMonth);

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

  return (
    <DatePickerStyled
      COLORS={COLORS}
      className="dates-container_calendar-picker"
    >
      <span className="calendar-picker_label">Pick date</span>
      <CalendarIcon className="calendar-picker_icon" />
      <div className="calendar-picker_calendar-container">
        <ul className="calendar-container_week-days">
          {generateWeekDays().map((day) => (
            <li>{day[0].toUpperCase()}</li>
          ))}
        </ul>
        <ul className="calendar-container_dates-list">
          {generateMonthDatesArray(currentMonth).map((day, index) => (
            <li className={assignMonthDatesClass(day, currentCalendarDate)}>
              {dayjs(day).format("D")}
            </li>
          ))}
        </ul>
      </div>
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
