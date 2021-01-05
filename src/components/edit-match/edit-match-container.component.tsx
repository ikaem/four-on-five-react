// src\components\edit-match\edit-match-container.component.tsx

import styled from "styled-components";

import SectionHeader from "../UI/section-header.component";
import EditMatchForm from "./edit-match-form.component";
import NewLocationForm from "./new-location-form.component";

import { COLORS } from "../../styles/global.style";

const EditMatchContainer: React.FC = () => {
  return (
    <EditMatchContainerStyled
      COLORS={COLORS}
      className="main-content_edit-match-section"
    >
      <SectionHeader label="Create new match" />
      <EditMatchForm />
      <NewLocationForm />
    </EditMatchContainerStyled>
  );
};

export default EditMatchContainer;

const EditMatchContainerStyled = styled.section<{ COLORS: typeof COLORS }>`
  background-color: ${({ COLORS }) => COLORS.lightBackground};
  padding: 1rem;
`;
