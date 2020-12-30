// src\components\shared\match-location.component.tsx

const MatchLocation: React.FC = () => {
  return (
    <div className="match-detailed-section_match-location">
      <div className="match-location_textual">
        <span>&gt;</span>
        <span>Good Ole Pitch</span>
        <span>Some Street</span>
        <span>City, Country</span>
      </div>
      <div className="match-location_visual">
        <img src="..." alt="" />
      </div>
    </div>
  );
};

export default MatchLocation;
