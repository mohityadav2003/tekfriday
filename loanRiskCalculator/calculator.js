const readline = require("readline");

function calculateRisk(missed_repayments, loan_amount, collateral_value, interest) {
  const score = (missed_repayments * 2) + (loan_amount / collateral_value) + (interest / 2);
  let riskLevel;

  if (score < 15) riskLevel = "LOW";
  else if (score <= 25) riskLevel = "MEDIUM";
  else riskLevel = "HIGH";

  return { score: score.toFixed(2), riskLevel };
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("📊 Loan Risk Calculator");

function promptUser() {
  rl.question("Enter missed repayments: ", (mr) => {
    rl.question("Enter loan amount: ", (loan) => {
      rl.question("Enter collateral value: ", (collateral) => {
        rl.question("Enter interest rate: ", (interest) => {
          const missedRepayments = parseFloat(mr);
          const loanAmount = parseFloat(loan);
          const collateralValue = parseFloat(collateral);
          const interestRate = parseFloat(interest);

          if (
            isNaN(missedRepayments) ||
            isNaN(loanAmount) ||
            isNaN(collateralValue) ||
            isNaN(interestRate) ||
            collateralValue === 0
          ) {
            console.log("❌ Invalid input. Please enter valid numbers. Collateral must be non-zero.");
            rl.close();
            return;
          }

          const { score, riskLevel } = calculateRisk(missedRepayments, loanAmount, collateralValue, interestRate);
          console.log(`\n✅ Risk Score: ${score}`);
          console.log(`⚠️ Risk Level: ${riskLevel}\n`);
          rl.close();
        });
      });
    });
  });
}

promptUser();

module.exports = { calculateRisk };