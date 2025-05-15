# TekFriday Loan Assessment Project

This repository contains implementations for the TekFriday assessment involving loan-related tasks. The project is divided into three parts:

---

## Project Structure

TekFriday/
├── buisnessLogicAutomation/ # Console-based loan FAQ chatbot
├── chatbot/ # Loan risk calculator function
├── loanRiskCalculator/ # Bulk risk classification with CSV/JSON support
└── README.md # Project overview and instructions



---

## Task 1: Chatbot

- Simple console chatbot that greets the user and answers loan-related FAQs.
- Uses a separate FAQ data module for predefined question-answer pairs.
- Location: `chatbot/`

---

## Task 2: Loan Risk Calculator

- Function that calculates risk score based on input parameters and classifies risk as LOW, MEDIUM, or HIGH.
- Formula:  
  `risk_score = (missed_repayments * 2) + (loan_amount / collateral_value) + (interest / 2)`
- Location: `loanRiskCalculator/`

---

## Task 3: Business Logic Automation

- Reads loan data in JSON or CSV formats.
- Applies risk score calculation on each record and adds a `risk_level` field.
- Supports file input/output with CLI interface.
- Location: `buisnessLogicAutomation/`

---

## Setup & Usage

- Each task folder contains its own `package.json`.
- Run `npm install` inside the respective folder to install dependencies.
- Follow individual folder README files for detailed instructions.

---

## Contact

For queries related to the project, contact:  
**Your Name**  
Email: mohitjb07@gmail.com

---

