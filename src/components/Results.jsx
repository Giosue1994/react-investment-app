import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({input}) {
  const resultsData = calculateInvestmentResults(input);
  const initialInvestmet =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  console.log(resultsData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investe Capital</th>
        </tr>
      </thead>

      <tbody>{resultsData.map(result => {
        const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestmet;
        const totalAmountInterest = result.valueEndOfYear - totalInterest;

        return (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInterest)}</td>
          </tr>
        );
        }
      )}</tbody>
    </table>
  );
}