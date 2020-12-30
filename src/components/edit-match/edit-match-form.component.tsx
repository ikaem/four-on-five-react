// src\components\edit-match\edit-match-form.component.tsx

import styled from "styled-components";

import MatchLocation from "../shared/match-location.component";

import { COLORS } from "../../styles/global.style";

const EditMatchForm: React.FC = () => {
  return (
    <EditMatchFormStyled COLORS={COLORS}>
      <form className="form-container_edit-match-form">
        <label htmlFor="matchName" className="edit-match-form_input">
          <span>Match title</span>
          <input type="text" name="matchName" id="matchName" />
        </label>
        <label htmlFor="spotsAvailable" className="edit-match-form_input">
          <span>Match title</span>
          <input
            type="number"
            name="spotsAvailable"
            id="spotsAvailable"
            className="edit-match-form_input"
          />
        </label>
        <label htmlFor="matchDescription" className="edit-match-form_input">
          <span>Match description</span>
          <textarea
            name="matchDescription"
            id="matchDescription"
            // cols={30}
            // rows={10}
          />
        </label>
        <div className="edit-match-form_match-time">
          <label htmlFor="matchDate" className="edit-match-form_input">
            <span>Match Date</span>
            <input
              type="date"
              name="spotsAvailable"
              id="spotsAvailable"
              className="edit-match-form_input"
            />
          </label>
          <label htmlFor="matchTimeStart" className="edit-match-form_input">
            <span>Match Start</span>
            <input
              type="time"
              name="matchTimeStart"
              id="matchTimeStart"
              className="edit-match-form_input"
            />
          </label>
          <label htmlFor="matchTimeEnd" className="edit-match-form_input">
            <span>Match Start</span>
            <input
              type="time"
              name="matchTimeEnd"
              id="matchTimeEnd"
              className="edit-match-form_input"
            />
          </label>
        </div>
        <div className="edit-match-form_match-location">
          <div className="match-location_existing-location">
            <label htmlFor="existingLocation" className="edit-match-form_label">
              <span>Pick location</span>
              <select
                name="existingLocation"
                id="existingLocation"
                className="edit-match-form_input"
                value={3}
              >
                <option value={1}>Good Ole Pitch</option>
                <option value={2}>Mini Pitch</option>
                <option value={3}>1st High School</option>
                <option value={4}>Artificial grass 3, FC Barcelona</option>
              </select>
            </label>
            <button className="edit-match-form_add-location-button">
              Add new location
            </button>
          </div>
          <MatchLocation />
        </div>
        <div className="edit-match-section_edit-actions">
          <button type="submit" className="edit-actions_create-button">
            <span>&gt;&gt;</span>
            <span>Create</span>
          </button>
          <button type="button" className="edit-actions_cancel-button">
            <span>&gt;&gt;</span>
            <span>Cancel</span>
          </button>
        </div>
      </form>
    </EditMatchFormStyled>
  );
};

export default EditMatchForm;

const EditMatchFormStyled = styled.div<{ COLORS: typeof COLORS }>`
  padding: 0.5rem 0;

  .form-container_edit-match-form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    label {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 0.25rem;
      }

      select,
      input,
      textarea {
        background-color: white;
        box-shadow: 0 1px rgba(0, 0, 0, 0.25);
        border-radius: 4px;

        padding: 0.5rem;
        text-align: center;
      }

      textarea {
        resize: vertical;
        text-align: left;
      }
    }

    .edit-match-form_match-time {
      padding: 1rem;
      background-color: ${({ COLORS }) => COLORS.barelyVisibleBackground};
      border-radius: 4px;

      display: flex;
      flex-direction: column;

      > label {
        flex: 1;

        &:nth-child(2) {
          margin: 1rem 0;
        }
      }
    }
  }
`;
