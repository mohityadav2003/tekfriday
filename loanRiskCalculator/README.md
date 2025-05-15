# Task 2: Loan Risk Calculator

## Description

A module that calculates the risk score of a loan based on:

risk_score = (missed_repayments * 2) + (loan_amount / collateral_value) + (interest / 2)


Classifies loans as:

- LOW risk (score < 15)
- MEDIUM risk (score 15–25)
- HIGH risk (score > 25)

## Setup

1. Navigate to the folder:

```bash
cd loanRiskCalculator
npm install
node calculator.js


