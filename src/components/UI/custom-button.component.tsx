// src\components\UI\custom-button.component.tsx

import styled from "styled-components";

import { ReactComponent as ConfirmedIcon } from "../../assets/images/icons/confirmed.svg";

import { COLORS } from "../../styles/global.style";

const CustomButton: React.FC = () => {
  return (
    <CustomButtonStyled COLORS={COLORS} className="match-brief_action-button">
      <ConfirmedIcon />
      <span>Joined</span>
    </CustomButtonStyled>
  );
};

export default CustomButton;

const CustomButtonStyled = styled.button<{ COLORS: typeof COLORS }>`
  background-color: ${({ COLORS }) => COLORS.greenBib};
  padding: 1rem;
  color: ${({ COLORS }) => COLORS.paleYellow};
  font-size: 1.25rem;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0.5rem;
  }
`;
