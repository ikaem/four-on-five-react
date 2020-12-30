// src\components\edit-match\edit-match-container.component.tsx

import SectionHeader from "../UI/section-header.component";
import EditMatchForm from "./edit-match-form.component";
import NewLocationForm from "./new-location-form.component";

const EditMatchContainer: React.FC = () => {
  return (
    <section className="main-content_edit-match-section">
      <SectionHeader />
      <EditMatchForm />
      <NewLocationForm />
    </section>
  );
};

export default EditMatchContainer;
