# Task 3: Business Logic Automation

## Description

Processes loan datasets in JSON or CSV formats to compute risk scores and classify each loan record with a risk level:

- LOW (< 15)
- MEDIUM (15–25)
- HIGH (> 25)

Outputs the classified data into JSON and CSV files.

## Features

- Supports input files in JSON and CSV formats
- Interactive CLI to select input format and file path
- Uses `apply()`-style logic to classify each loan entry
- Outputs results to `output.json` and `output.csv`

## Setup

1. Navigate to the folder: (You must be in the buisnessLogicAutomation directory before running npm install)

```bash
cd buisnessLogicAutomation
npm install
node classifyRisk.js 