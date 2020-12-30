// src\components\match-detailed\match-actions.component.tsx

import styled from "styled-components";

import CustomButton from "../UI/custom-button.component";

import { COLORS } from "../../styles/global.style";

const MatchActions: React.FC = () => {
  return (
    <MatchActionsStyled
      COLORS={COLORS}
      className="match-detailed-section_match-actions"
    >
      <CustomButton />
      <CustomButton />
      <CustomButton />
    </MatchActionsStyled>
  );
};

export default MatchActions;

const MatchActionsStyled = styled.div<{ COLORS: typeof COLORS }>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  margin: 1rem 0;

  > :first-child {
    grid-column: 1 / -1;
  }

  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, 1fr);

    > :first-child {
      grid-column-end: 3;
      grid-row: 1/3;
    }
  }
`;
