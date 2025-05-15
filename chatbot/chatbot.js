const readline = require("readline");
const faq = require("./faq");

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning!";
  else if (hour < 17) return "Good afternoon!";
  else return "Good evening!";
}



function normalizeInput(input) {
  return input.trim().toLowerCase().replace(/[?]/g, "");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`${getGreeting()} I'm LoanBot! Ask me about loan terms (type 'exit' to quit).\n`);

function askQuestion() {
  rl.question("You: ", (input) => {
    const question = normalizeInput(input);

    if (question === "exit") {
      console.log("LoanBot: Thank you! Have a great day!");
      rl.close();
      return;
    }

    const response = faq[question] || "Sorry, I don't understand that. Try asking about EMI, tenure, interest, or collateral.";
    console.log(`LoanBot: ${response}\n`);

    askQuestion();
  });
}

askQuestion();
