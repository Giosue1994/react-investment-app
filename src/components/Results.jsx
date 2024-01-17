import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}) {
    const investmentResult = calculateInvestmentResults(input);

    console.log(investmentResult);
    return (
        <table id="result">
            
        </table>
    );
}