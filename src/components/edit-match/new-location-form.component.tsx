// src\components\edit-match\new-location-form.component.tsx

import styled from "styled-components";
import { COLORS } from "../../styles/global.style";
import CustomButton from "../UI/custom-button.component";

const NewLocationForm: React.FC = () => {
  return (
    <NewLocationFormStyled COLORS={COLORS}>
      <h4 className="new-location_label">Create new Location</h4>
      <form className="match-location_new-location">
        <label htmlFor="newLocationName" className="edit-match-form_input">
          <span>Name</span>
          <input type="text" name="newLocationName" id="newLocationName" />
        </label>
        <label htmlFor="newLocationAddress" className="edit-match-form_input">
          <span>Address</span>
          <input
            type="text"
            name="newLocationAddress"
            id="newLocationAddress"
          />
        </label>
        <label htmlFor="newLocationCity" className="edit-match-form_input">
          <span>City</span>
          <input type="text" name="newLocationCity" id="newLocationCity" />
        </label>
        <label htmlFor="newLocationCountry" className="edit-match-form_input">
          <span>Country</span>
          <input
            type="text"
            name="newLocationCountry"
            id="newLocationCountry"
          />
        </label>
        <CustomButton />
      </form>
    </NewLocationFormStyled>
  );
};

export default NewLocationForm;

const NewLocationFormStyled = styled.div<{ COLORS: typeof COLORS }>`
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ COLORS }) => COLORS.barelyVisibleBackground};
  border-radius: 4px;

  h4 {
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    label {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 0.25rem;
      }

      input {
        background-color: white;
        box-shadow: 0 1px rgba(0, 0, 0, 0.25);
        border-radius: 4px;

        padding: 0.5rem;
        text-align: center;
      }
    }
  }
`;
