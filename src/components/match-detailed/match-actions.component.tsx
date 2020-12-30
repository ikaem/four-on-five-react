// src\components\match-detailed\match-actions.component.tsx

const MatchActions: React.FC = () => {
  return (
    <div className="match-detailed-section_match-actions">
      <button className="match-actions_join-button">
        <span>&gt;&gt;</span>
        <span>Join</span>
      </button>
      <button className="match-actions_edit-button">Edit</button>
      <button className="match-actions_delete-button">Delete</button>
    </div>
  );
};

export default MatchActions;
