// src\components\home\match-brief.component.tsx

import styled from "styled-components";

import { ReactComponent as TimeIcon } from "../../assets/images/icons/time.svg";
import { ReactComponent as LocationIcon } from "../../assets/images/icons/location.svg";
import { ReactComponent as PersonIcon } from "../../assets/images/icons/person.svg";
import { ReactComponent as ConfirmedIcon } from "../../assets/images/icons/confirmed.svg";

import { COLORS } from "../../styles/global.style";
import CustomButton from "../UI/custom-button.component";

const MatchBrief: React.FC = () => {
  return (
    <MatchBriefStyled COLORS={COLORS} className="matches-list_match-brief">
      <div className="match-brief_info">
        <h3>Match organized at some place at some time</h3>
        <p>
          <TimeIcon />
          <span>15:30 - 17:00</span>
        </p>
        <p>
          <LocationIcon />
          <span>Good Ole Pitch</span>
        </p>
        <p>
          <PersonIcon />
          <span>3 free spots</span>
        </p>
      </div>
      <CustomButton />
    </MatchBriefStyled>
  );
};

export default MatchBrief;

const MatchBriefStyled = styled.li<{ COLORS: typeof COLORS }>`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  .match-brief_info {
    padding: 1rem;
    background-color: ${({ COLORS }) => COLORS.darkBackground};
    color: white;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.25rem 3rem;

    h3 {
      /* color: ${({ COLORS }) => COLORS.lightText}; */
      font-size: 1.25rem;
      grid-column: span 3;
      padding-bottom: 0.75rem;
    }

    p {
      grid-column: span 3;

      display: flex;
      align-items: center;

      span {
        color: ${({ COLORS }) => COLORS.touchedText};
      }

      svg {
        margin-right: 0.5rem;
        height: 1rem;
        width: 1rem;
      }
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
