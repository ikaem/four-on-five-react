const NewLocationForm: React.FC = () => {
  return (
    <div>
      <span className="new-location_label">Create new Location</span>
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
        <button type="button">
          <span>&gt;</span>
          <span>Create location</span>
        </button>
      </form>
    </div>
  );
};

export default NewLocationForm;
