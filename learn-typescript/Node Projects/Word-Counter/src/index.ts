#! /usr/bin/env node

import inquirer from "inquirer";

async function main() {
  try {
    const countWords = await inquirer.prompt<{ enterText: string }>([
      {
        name: "enterText",
        type: "input",
        message: "Enter or paste your text:",
      },
    ]);

    const words = countWords.enterText;

    console.log("Received text:", words);
    console.log(`The length of words is ${words.length} characters`);
  } catch (error) {
    console.log("An error aoccured:", error);
  }
}

main();
