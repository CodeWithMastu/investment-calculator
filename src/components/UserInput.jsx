const investFields = [
  { label: "Initial Investment", key: "initialInvestment" },
  { label: "Annual Investment", key: "annualInvestment" },
  { label: "Expected Return", key: "expectedReturn" },
  { label: "Duration", key: "duration" },
];

export default function UserInput({userInput, onChange}) {
  return (
    <form id="user-input">
      <div className="input-group">
        {investFields.slice(0, 2).map((field) => (
          <p key={field.key}>
            <label>{field.label}</label>
            <input
              type="number"
              required
              value={userInput[field.key]}
              onChange={(event) => onChange(field.key, event.target.value)}
            />
          </p>
        ))}
      </div>
      <div className="input-group">
        {investFields.slice(2).map((field) => (
          <p key={field.key}>
            <label>{field.label}</label>
            <input
              type="number"
              required
              value={userInput[field.key]}
              onChange={(event) => onChange(field.key, event.target.value)}
            />
          </p>
        ))}
      </div>
    </form>
  );
}
