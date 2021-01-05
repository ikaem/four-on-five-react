// src\components\home\matches-container.component.tsx

import React from "react";
import styled from "styled-components";

import DateWeather from "../shared/date-weather.component";
import SectionHeader from "../UI/section-header.component";
import DatesSelector from "./dates-selector.component";
import MatchBrief from "./match-brief.component";

import { COLORS } from "../../styles/global.style";

interface MatchesContainerProps {
  myMatches?: boolean;
}

interface MatchesTypeDataI {
  label: string;
  colors: {
    backgroundColor: string;
  };
}

const MatchesContainer: React.FC<MatchesContainerProps> = ({ myMatches }) => {
  const matchesTypeData = React.useCallback(
    (): MatchesTypeDataI =>
      myMatches
        ? {
            label: "My matches",
            colors: {
              backgroundColor: COLORS.lightBackground,
            },
          }
        : {
            label: "All matches",
            colors: {
              backgroundColor: COLORS.lessDarkBackground,
            },
          },
    [myMatches]
  );

  return (
    <MatchesContainerStyled
      colors={matchesTypeData().colors}
      className="main-content_matches-section"
    >
      <SectionHeader label={matchesTypeData().label} />
      <DatesSelector />
      <DateWeather />
      <ul className="matches-section_matches-list">
        <MatchBrief />
      </ul>
    </MatchesContainerStyled>
  );
};

export default MatchesContainer;

const MatchesContainerStyled = styled.section<{
  colors: MatchesTypeDataI["colors"];
}>`
  background-color: ${({ colors }) => colors.backgroundColor};
  padding: 1rem;

  .matches-section_matches-list {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  @media (min-width: 40rem) {
    padding: 1rem 2rem 2rem;
  }
`;
