// src\components\match-detailed\match-detailed-container.component.tsx

import styled from "styled-components";

import SectionHeader from "../UI/section-header.component";
import MatchActions from "./match-actions.component";
import MatchDescription from "./match-description.component";
import MatchInfo from "./match-info.component";
import MatchPlayersMapper from "./match-players-mapper.component";

import { COLORS } from "../../styles/global.style";

const MatchDetailedContainer: React.FC = () => {
  return (
    <MatchDetailedContainerStyled
      COLORS={COLORS}
      className="main-content_match-detailed-section"
    >
      <SectionHeader label="Match details" />
      <MatchDescription />
      <MatchActions />
      <MatchInfo />
      <MatchPlayersMapper />
    </MatchDetailedContainerStyled>
  );
};

export default MatchDetailedContainer;

const MatchDetailedContainerStyled = styled.section<{ COLORS: typeof COLORS }>`
  background-color: ${({ COLORS }) => COLORS.lightBackground};
  padding: 1rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  > :first-child {
    grid-column: 1 / -1;
  }

  > * {
    grid-column: 1;
  }

  @media (min-width: 40rem) {
    padding: 1rem 2rem 2rem;

    grid-template-columns: 1fr 1fr;

    > :last-child {
      grid-column: 2;
      grid-row: 2;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;
