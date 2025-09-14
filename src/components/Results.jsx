import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
  const table = [
    "Year",
    "Investment Value",
    "Interest (Year)",
    "Total Interest",
    "Invested Capital",
  ];
  const results = calculateInvestmentResults(userInput);
  return (
    <table id="result">
      <thead>
        <tr>
          {table.map((tab, index) => (
            <th key={index}>{tab}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((res) => (
          <tr key={res.year}>
            <td>{res.year}</td>
            <td>{formatter.format(res.valueEndOfYear)}</td>
            <td>{formatter.format(res.interest)}</td>
            <td>
              {formatter.format(
                res.valueEndOfYear -
                  userInput.initialInvestment -
                  res.annualInvestment * res.year
              )}
            </td>
            <td>
              {formatter.format(
                userInput.initialInvestment + res.annualInvestment * res.year
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
