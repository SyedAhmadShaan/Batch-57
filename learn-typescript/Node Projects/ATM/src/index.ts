#! /usr/bin/env node

import inquirer from "inquirer";
let myBalance$ = 10000;
let myPin = 1234;

let answerPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your PIN",
  },
]);
if (answerPin.pin === myPin) {
  console.log("Your PIN is correct !!!");
  let answerOp = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Do you want to withdraw money?",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);
  if (answerOp.operation === "Withdraw") {
    let answerAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to withdraw",
      },
    ]);
    if (answerAmount.amount > myBalance$) {
      console.log("Insufficient Balance");
    } else {
      myBalance$ -= answerAmount.amount;
      console.log(`Your remaining balance is ${myBalance$}`);
    }
  }
  if (answerOp.operation === "Check Balance") {
    console.log(`Your remaining balance is ${myBalance$}`);
  }
} else {
  console.log("Your PIN is incorrect !!!");
}
