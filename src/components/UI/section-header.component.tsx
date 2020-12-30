// src\components\UI\section-header.component.tsx

const SectionHeader: React.FC = () => {
  return (
    <header className="matches-section_header">
      <h2>My Matches</h2>
      <span>(6 upcoming)</span>
      <span>&gt;</span>
    </header>
  );
};

export default SectionHeader;
