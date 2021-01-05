// src\components\UI\section-header.component.tsx

import styled from "styled-components";

import { ReactComponent as CaretIcon } from "../../assets/images/icons/caret.svg";

import { COLORS } from "../../styles/global.style";

interface SectionHeaderProps {
  label: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ label }) => {
  return (
    <SectionHeaderStyled COLORS={COLORS} className="matches-section_header">
      <h2>{label}</h2>
      <span>(6 upcoming)</span>
      <CaretIcon />
    </SectionHeaderStyled>
  );
};

export default SectionHeader;

const SectionHeaderStyled = styled.header<{ COLORS: typeof COLORS }>`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;

  font-size: 0.75rem;
  color: ${({ COLORS }) => COLORS.touchedText};

  h2 {
    text-transform: uppercase;
    margin-right: 1rem;
  }

  svg {
    margin-left: auto;

    cursor: pointer;

    &:hover {
      color: ${({ COLORS }) => COLORS.darkText};
    }
  }

  @media (min-width: 40rem) {
    font-size: 1rem;
  }
`;
