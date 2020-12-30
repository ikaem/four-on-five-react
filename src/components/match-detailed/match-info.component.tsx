// src\components\match-detailed\match-info.component.tsx

import DateWeather from "../shared/date-weather.component";
import MatchLocation from "../shared/match-location.component";

const MatchInfo: React.FC = () => {
  return (
    <div className="match-detailed-section_match-info">
      <DateWeather />
      <div className="match-detailed-section_match-time">
        <span>&gt;</span>
        <span>15:30 - 17:00</span>
      </div>
      <MatchLocation />
    </div>
  );
};

export default MatchInfo;
