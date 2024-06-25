#! /usr/bin/env node
import inquirer from "inquirer";
const exchangeRates = {
    USD: 1,
    EUR: 0.93,
    GBP: 0.79,
    INR: 83.43,
    PKR: 278.5,
    RUB: 88.25,
    CNY: 7.26,
    SAR: 3.75,
};
async function promptUser() {
    const convert = await inquirer.prompt([
        {
            name: "amount",
            type: "input",
            message: "Enter amount to convert",
        },
        {
            name: "from",
            type: "list",
            message: "Enter from currency e.g USD",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB", "CNY", "SAR"],
        },
        {
            name: "to",
            type: "list",
            message: "Enter to currency e.g EUR",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "RUB", "CNY", "SAR"],
        },
    ]);
    return convert;
}
function convertCurrency(amount, from, to) {
    const fromRate = exchangeRates[from.toUpperCase()];
    const toRate = exchangeRates[to.toUpperCase()];
    if (fromRate && toRate) {
        return (amount / fromRate) * toRate;
    }
    return null;
}
async function main() {
    let condition = true;
    while (condition) {
        const { amount, from, to } = await promptUser();
        const convertedAmount = convertCurrency(amount, from, to);
        if (convertedAmount !== null) {
            console.log(`${amount} ${from} is equal to ${convertedAmount.toFixed(2)} ${to}`);
        }
        else {
            console.log("Invalid currency code");
        }
        condition = false;
    }
}
main();
