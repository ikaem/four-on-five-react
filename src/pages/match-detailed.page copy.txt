// src\pages\match-detailed.page.tsx

import DateWeather from "../components/shared/date-weather.component";
import SectionHeader from "../components/UI/section-header.component";

const MatchDetailed: React.FC = () => {
  return (
    <main className="main-content">
      <section className="main-content_match-detailed-section">
        <SectionHeader />

        <div className="match-detailed-section_match-description">
          <h3 className="match-description_match-title">
            Some match name here
          </h3>
          <p className="match-description_match-owner">
            by <strong>Jonas</strong> of <strong>The Great Team</strong>
          </p>
          <p className="match-description_description-actual">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            beatae, illum explicabo dicta nostrum perferendis quia vitae labore
            animi sint aut tempora amet adipisci numquam, velit voluptatibus
            qui. Tempora, non!
          </p>
        </div>
        <div className="match-detailed-section_match-actions">
          <button className="match-actions_join-button">
            <span>&gt;&gt;</span>
            <span>Join</span>
          </button>
          <button className="match-actions_edit-button">Edit</button>
          <button className="match-actions_delete-button">Delete</button>
        </div>
        <div className="match-detailed-section_match-info">
          <DateWeather />
          <div className="match-detailed-section_match-time">
            <span>&gt;</span>
            <span>15:30 - 17:00</span>
          </div>
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
        </div>

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
      </section>
    </main>
  );
};

export default MatchDetailed;
