// src\components\match-detailed\match-description.component.tsx

import styled from "styled-components";

import { COLORS } from "../../styles/global.style";

const MatchDescription: React.FC = () => {
  return (
    <MatchDescriptionStyled
      COLORS={COLORS}
      className="match-detailed-section_match-description"
    >
      <h3 className="match-description_match-title">Some match name here</h3>
      <p className="match-description_match-owner">
        by <strong>Jonas</strong> of <strong>The Great Team</strong>
      </p>
      <p className="match-description_description-actual">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia beatae,
        illum explicabo dicta nostrum perferendis quia vitae labore animi sint
        aut tempora amet adipisci numquam, velit voluptatibus qui. Tempora, non!
      </p>
    </MatchDescriptionStyled>
  );
};

export default MatchDescription;

const MatchDescriptionStyled = styled.div<{ COLORS: typeof COLORS }>`
  color: ${({ COLORS }) => COLORS.ashText};

  h3 {
    color: ${({ COLORS }) => COLORS.redBib};
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }

  .match-description_match-owner {
    margin-bottom: 0.5rem;
  }

  .match-description_description-actual {
    line-height: 135%;
  }
`;
