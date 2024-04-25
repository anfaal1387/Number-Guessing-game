#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n \tWelcome to M. Anfaal-CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGussedNumber",
        type: "Number",
        message: "Entry the number you think AI has gussed (Number limit from 1 to 5)!",
    },
]);
if (answer.UserGussedNumber === randomNumber) {
    console.log("Congratulations! You Have Gussed the Correct Number.");
}
else {
    console.log("Sorry, You Have Gussed the Wrong Number!");
}
console.log(`The Correct Number is ${randomNumber}, Better Luck Next Time!`);
