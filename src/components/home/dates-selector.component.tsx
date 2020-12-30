// src\components\home\dates-selector.component.tsx

import styled from "styled-components";

import DatePicker from "./date-picker.component";
import DatesSlider from "./dates-slider.component";

import { COLORS } from "../../styles/global.style";

const DatesSelector: React.FC = () => {
  return (
    <DatesSelectorStyled
      COLORS={COLORS}
      className="matches-section_dates-container"
    >
      <button className="dates-container_now-day active">Today</button>
      <button className="dates-container_now-day">Tomorrow</button>
      <DatesSlider />
      <DatePicker />
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
