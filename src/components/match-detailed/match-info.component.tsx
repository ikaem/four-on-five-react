// src\components\match-detailed\match-info.component.tsx

import styled from "styled-components";

import DateWeather from "../shared/date-weather.component";
import MatchLocation from "../shared/match-location.component";

import { COLORS } from "../../styles/global.style";
import { ReactComponent as TimeIcon } from "../../assets/images/icons/time.svg";

const MatchInfo: React.FC = () => {
  return (
    <MatchInfoStyled
      COLORS={COLORS}
      className="match-detailed-section_match-info"
    >
      <DateWeather />
      <div className="match-detailed-section_match-time">
        <TimeIcon />
        <span>15:30 - 17:00</span>
      </div>
      <MatchLocation />
    </MatchInfoStyled>
  );
};

export default MatchInfo;

const MatchInfoStyled = styled.div<{ COLORS: typeof COLORS }>`
  color: ${({ COLORS }) => COLORS.ashText};
  margin-bottom: 0.75rem;

  > :first-child {
    margin-bottom: 0.25rem;
  }

  .match-detailed-section_match-time {
    margin-bottom: 0.25rem;
    display: flex;
    align-items: center;

    svg {
      height: 1rem;
      width: auto;

      margin-right: 0.5rem;
    }
  }
`;
