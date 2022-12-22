import { useAppState } from "../state/app.state";

export const NameEditor = () => {
  const inputEnabled = useAppState((state) => state.inputEnabled);
  const reviewedName = useAppState((state) => state.inputs.name);
  const updateName = useAppState((state) => state.updateName);

  return (
    <div className="field">
      <label className="label">Person name:</label>
      <div className="control">
        <input
          type="text"
          className="input"
          required
          disabled={!inputEnabled}
          value={reviewedName}
          placeholder="Write a person's name here"
          onChange={(e) => updateName(e.currentTarget.value)}
        ></input>
      </div>
    </div>
  );
};
