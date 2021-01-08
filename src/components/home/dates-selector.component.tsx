// src\components\home\dates-selector.component.tsx

import styled from "styled-components";
import dayjs from "dayjs";

import DatePicker from "./date-picker.component";
import DatesSlider from "./dates-slider.component";

import { COLORS } from "../../styles/global.style";

interface DateSelectorPropsI {
  handleSelectedDate: (dateISOString: string) => void;
}

const DatesSelector: React.FC<DateSelectorPropsI> = ({
  handleSelectedDate,
}) => {
  return (
    <DatesSelectorStyled
      COLORS={COLORS}
      className="matches-section_dates-container"
    >
      <button
        className="dates-container_now-day active"
        onClick={() => handleSelectedDate(dayjs().toISOString())}
      >
        Today
      </button>
      <button
        className="dates-container_now-day"
        onClick={() => handleSelectedDate(dayjs().add(1, "day").toISOString())}
      >
        Tomorrow
      </button>
      {/* <DatesSlider /> */}
      <DatePicker handleSelectedDate={handleSelectedDate} />
    </DatesSelectorStyled>
  );
};

export default DatesSelector;

const DatesSelectorStyled = styled.div<{ COLORS: typeof COLORS }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${({ COLORS }) => COLORS.ashText};

  padding: 0.5rem 0;

  .dates-container_now-day {
    cursor: pointer;

    &.active {
      color: ${({ COLORS }) => COLORS.redBib};
      font-weight: 700;
    }

    &:hover {
      color: ${({ COLORS }) => COLORS.greenBib};
    }

    &:last-of-type {
      margin-right: auto;
      margin-left: 1rem;
    }
  }
`;
