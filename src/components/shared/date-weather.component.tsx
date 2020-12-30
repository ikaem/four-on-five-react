// src\components\shared\date-weather.component.tsx

import styled from "styled-components";

import { ReactComponent as CalendarIcon } from "../../assets/images/icons/calendar.svg";
import { ReactComponent as SunnyIcon } from "../../assets/images/weather-icons/sunny.svg";

import { COLORS } from "../../styles/global.style";

const DateWeather: React.FC = () => {
  return (
    <DateWeatherStyled
      COLORS={COLORS}
      className="matches-section_selected-date-info"
    >
      <div className="selected-date-info_full-date">
        <CalendarIcon />
        <span>Friday, 16 Dec 2020</span>
      </div>
      <div className="selected-date-info_weather-info">
        <SunnyIcon />
        <span className="weather-info_weather-brief">16 °C, Cloudy</span>
      </div>
    </DateWeatherStyled>
  );
};

export default DateWeather;

const DateWeatherStyled = styled.div<{ COLORS: typeof COLORS }>`
  display: flex;
  align-items: center;

  /* font-size: 0.75rem; */

  > div {
    display: flex;
    align-items: center;
  }

  .selected-date-info_full-date {
    color: ${({ COLORS }) => COLORS.redBib};
    /* font-weight: 700; */

    margin-right: 2rem;

    svg {
      height: 1rem;
      width: auto;

      margin-right: 0.5rem;
    }
  }

  .selected-date-info_weather-info {
    color: ${({ COLORS }) => COLORS.ashText};

    svg {
      width: 1rem;
      height: 1rem;

      margin-right: 0.5rem;
    }
  }
`;
