const fs = require("fs");
const readline = require("readline");
const csv = require("csv-parser");
const { Parser } = require("json2csv");

function classifyRisk(row) {
  const missed_repayments = Number(row.missed_repayments);
  const loan_amount = Number(row.loan_amount);
  const collateral_value = Number(row.collateral_value);
  const interest = Number(row.interest);

  const score = (missed_repayments * 2) + (loan_amount / collateral_value) + (interest / 2);
  let risk_level = "LOW";
  if (score > 25) risk_level = "HIGH";
  else if (score >= 15) risk_level = "MEDIUM";

  return { ...row, score: score.toFixed(2), risk_level };
}

function processAndSave(data, outputPrefix = "classifiedData") {
  const classified = data.map(classifyRisk);
  console.log("✅ Classified Data:");
  console.table(classified);

  fs.writeFileSync(`${outputPrefix}.json`, JSON.stringify(classified, null, 2));
  console.log(`📁 Saved JSON to ${outputPrefix}.json`);

  const fields = Object.keys(classified[0]);
  const parser = new Parser({ fields });
  const csvOutput = parser.parse(classified);
  fs.writeFileSync(`${outputPrefix}.csv`, csvOutput);
  console.log(`📁 Saved CSV to ${outputPrefix}.csv`);
}

function readJSON(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(raw);
    processAndSave(jsonData);
  } catch (error) {
    console.error("❌ Error reading JSON:", error.message);
  }
}

function readCSV(filePath) {
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => processAndSave(results))
    .on("error", (err) => console.error("❌ Error reading CSV:", err.message));
}

function promptUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("📂 Choose input format (json/csv): ", (format) => {
    const lowerFormat = format.trim().toLowerCase();

    rl.question("📄 Enter path to the input file: ", (filePath) => {
      if (!fs.existsSync(filePath)) {
        console.error("❌ File not found.");
        rl.close();
        return;
      }

      if (lowerFormat === "json") {
        readJSON(filePath);
      } else if (lowerFormat === "csv") {
        readCSV(filePath);
      } else {
        console.error("❌ Unsupported format. Use 'json' or 'csv'.");
      }

      rl.close();
    });
  });
}

promptUser();
