import inquirer from "inquirer";
import chalk from "chalk";


let country = await inquirer.prompt([{
    name : "Nationality",
    type : "string",
    message : "Enter your nationality:"
}])

let company = await inquirer.prompt([{
    name: "Company",
    type : "string",
    message: "Input name of the company here: "
}])

console.log(chalk.redBright("I aim to be one of the aspiring GenAI developers from " + (chalk.bgGreen.bold(country = country.Nationality) + ", hopefully.")));
console.log(chalk.yellowBright("This IDE is") + chalk.magentaBright.bold(" called Visual Studio Code and it was developed by Microsoft"));