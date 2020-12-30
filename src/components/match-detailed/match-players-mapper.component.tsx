// src\components\match-detailed\match-players-mapper.component.tsx

import styled from "styled-components";

import { ReactComponent as PlayerIcon } from "../../assets/images/icons/person.svg";

import { COLORS } from "../../styles/global.style";

const MatchPlayersMapper: React.FC = () => {
  return (
    <MatchPlayersMapperStyled
      COLORS={COLORS}
      className="match-detailed-section_match-players"
    >
      <div className="match-players_player-number">
        <PlayerIcon />
        <p>
          <span className="player-number_confirmed">11 players coming</span>{" "}
          <span>/</span>{" "}
          <strong className="player-number_available-spots">
            3 spots free
          </strong>
        </p>
      </div>
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
    </MatchPlayersMapperStyled>
  );
};

export default MatchPlayersMapper;

const MatchPlayersMapperStyled = styled.div<{ COLORS: typeof COLORS }>`
  .match-players_player-number {
    display: flex;
    align-items: center;

    color: ${({ COLORS }) => COLORS.ashText};

    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ COLORS }) => COLORS.touchedText};
    margin-bottom: 0.5rem;

    svg {
      height: 1rem;
      width: auto;

      margin-right: 0.5rem;
    }
  }

  .match-players_list {
    display: flex;
    flex-direction: column;

    > li {
      margin-bottom: 0.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
