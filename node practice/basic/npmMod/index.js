const chalk = require("chalk");
// console.log(chalk.blue.inverse("kem chho....?"));

const validator = require("validator");
const res = validator.isEmail("abc@abc.com")

console.log(res ? chalk.green(res) : chalk.red(res));
