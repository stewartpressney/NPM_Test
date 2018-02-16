var chalk = require("chalk");

var message = chalk.blue('My favorite colour is ' + chalk.underline("BLUE" + " " + chalk.strikethrough.bgBlue("DuDe") + ' World') + chalk.red('!'));

console.log(message);

