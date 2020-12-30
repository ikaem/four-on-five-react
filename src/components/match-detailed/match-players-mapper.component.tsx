const MatchPlayersMapper: React.FC = () => {
  return (
    <div className="match-detailed-section_match-players">
      <p className="match-players_player-number">
        <span>&gt;</span>
        <span className="player-number_confirmed">11 players coming</span>
        <span>/</span>
        <span className="player-number_available-spots">3 spots free</span>
      </p>
      <ul className="match-players_list">
        <li className="match-players__player">
          <div className="player_avatar-container">
            <img src="..." alt="" />
          </div>
          <span className="player_name">Mark Ruffalo</span>
        </li>
        <li className="match-players__player">
          <div className="player_avatar-container">
            <img src="..." alt="" />
          </div>
          <span className="player_name">Mark Ruffalo</span>
        </li>
        <li className="match-players__player">
          <div className="player_avatar-container">
            <img src="..." alt="" />
          </div>
          <span className="player_name">Mark Ruffalo</span>
        </li>
        <li className="match-players__player">
          <div className="player_avatar-container">
            <img src="..." alt="" />
          </div>
          <span className="player_name">Mark Ruffalo</span>
        </li>
      </ul>
    </div>
  );
};

export default MatchPlayersMapper;
