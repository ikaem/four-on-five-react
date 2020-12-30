// src\components\home\matches-container.component.tsx

import styled from "styled-components";

import DateWeather from "../shared/date-weather.component";
import SectionHeader from "../UI/section-header.component";
import DatesSelector from "./dates-selector.component";
import MatchBrief from "./match-brief.component";

import { COLORS } from "../../styles/global.style";

const MatchesContainer: React.FC = () => {
  return (
    <MatchesContainerStyled
      COLORS={COLORS}
      className="main-content_matches-section"
    >
      <SectionHeader />
      <DatesSelector />
      <DateWeather />
      <ul className="matches-section_matches-list">
        <MatchBrief />
      </ul>
    </MatchesContainerStyled>
  );
};

export default MatchesContainer;

const MatchesContainerStyled = styled.section<{ COLORS: typeof COLORS }>`
  background-color: ${({ COLORS }) => COLORS.lightBackground};
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
