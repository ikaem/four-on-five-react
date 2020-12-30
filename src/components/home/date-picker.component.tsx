// src\components\home\date-picker.component.tsx

import styled from "styled-components";

import { ReactComponent as CalendarIcon } from "../../assets/images/icons/calendar.svg";

import { COLORS } from "../../styles/global.style";

const DatePicker: React.FC = () => {
  return (
    <DatePickerStyled
      COLORS={COLORS}
      className="dates-container_calendar-picker"
    >
      <span className="calendar-picker_label">Pick date</span>
      <CalendarIcon className="calendar-picker_icon" />
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
`;
