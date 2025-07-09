const chalk = require("chalk");

const logger = {
  success: (msg) => console.log(chalk.green("[SUCCESS]"), msg),
  error: (msg) => console.log(chalk.red("[ERROR]"), msg),
  info: (msg) => console.log(chalk.blue("[INFO]"), msg),
};

module.exports = logger;
