// src\components\shared\date-weather.component.tsx

const DateWeather: React.FC = () => {
  return (
    <div className="matches-section_selected-date-info">
      <div className="selected-date-info_full-date">
        <span>&gt;</span>
        <span>Friday, 16 December 2020</span>
      </div>
      <div className="selected-date-info_weather-info">
        <span className="weather-info_weather-visual">&gt;&gt;</span>
        <span className="weather-info_weather-brief">16 °C, Cloudy</span>
      </div>
    </div>
  );
};

export default DateWeather;
