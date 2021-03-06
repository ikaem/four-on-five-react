// src\pages\edit-match.page.tsx

import SectionHeader from "../components/UI/section-header.component";

const EditMatch: React.FC = () => {
  return (
    <main className="main-content">
      <section className="main-content_edit-match-section">
        <SectionHeader />
        <div className="edit-match-section_form-container">
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
                cols={30}
                rows={10}
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
                <label
                  htmlFor="existingLocation"
                  className="edit-match-form_input"
                >
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
                <div className="existing-location_details">
                  <strong>Good Ole Pitch</strong>
                  <span>Some Street Name 2</span>
                  <span>City, Country</span>
                </div>
              </div>
              <div className="match-location_new-location">
                <span className="new-location_label">Create new Location</span>
                <label
                  htmlFor="newLocationName"
                  className="edit-match-form_input"
                >
                  <span>Name</span>
                  <input
                    type="text"
                    name="newLocationName"
                    id="newLocationName"
                  />
                </label>
                <label
                  htmlFor="newLocationAddress"
                  className="edit-match-form_input"
                >
                  <span>Address</span>
                  <input
                    type="text"
                    name="newLocationAddress"
                    id="newLocationAddress"
                  />
                </label>
                <label
                  htmlFor="newLocationCity"
                  className="edit-match-form_input"
                >
                  <span>City</span>
                  <input
                    type="text"
                    name="newLocationCity"
                    id="newLocationCity"
                  />
                </label>
                <label
                  htmlFor="newLocationCountry"
                  className="edit-match-form_input"
                >
                  <span>Country</span>
                  <input
                    type="text"
                    name="newLocationCountry"
                    id="newLocationCountry"
                  />
                </label>
                <button type="button">
                  <span>&gt;</span>
                  <span>Create location</span>
                </button>
              </div>
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
        </div>
      </section>
    </main>
  );
};

export default EditMatch;
