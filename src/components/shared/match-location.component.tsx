// src\components\shared\match-location.component.tsx

import styled from "styled-components";

import { COLORS } from "../../styles/global.style";
import { ReactComponent as LocationIcon } from "../../assets/images/icons/location.svg";

const MatchLocation: React.FC = () => {
  return (
    <MatchLocationStyled
      COLORS={COLORS}
      className="match-detailed-section_match-location"
    >
      <div className="match-location_textual">
        <LocationIcon />
        <p>
          <strong>Good Ole Pitch</strong>
          <br />
          <span>Some Street</span>
          <br />
          <span>City, Country</span>
        </p>
      </div>
      <div className="match-location_visual">
        <img src="..." alt="" />
      </div>
    </MatchLocationStyled>
  );
};

export default MatchLocation;

const MatchLocationStyled = styled.div<{ COLORS: typeof COLORS }>`
  .match-location_textual {
    display: flex;
    align-items: flex-start;

    svg {
      height: 1rem;
      width: auto;

      margin-right: 0.5rem;
    }

    p {
      line-height: 140%;
    }
  }
`;
