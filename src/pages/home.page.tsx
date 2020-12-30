// src\pages\home.page.tsx

import styled from "styled-components";

import { COLORS } from "../styles/global.style";
import MatchesContainer from "../components/home/matches-container.component";

const Home: React.FC = () => {
  return (
    <MainStyled COLORS={COLORS} className="main-content">
      <MatchesContainer />
      <MatchesContainer />
    </MainStyled>
  );
};

export default Home;

const MainStyled = styled.main<{ COLORS: typeof COLORS }>`
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */

  /* here is the match list component */

  .matches-section_matches-list {
    /* display: flex;
    flex-direction: column;
    padding: 1rem 0; */

    /* match brief component */
  }
`;
