const chalk = require('chalk');

module.exports = (text, type) => {
    switch (type) {
        case "warn":
            process.stderr.write(chalk.hex("#ff5208")(`\r» ERROR « `) + text + '\n');
            break;
        case "error":
            process.stderr.write(chalk.bold.hex("#ff0000").bold(`\r» ERROR « `) + text + '\n');
            break;
        case "load":
            process.stderr.write(chalk.cyan(`\r» NEW USER « `) + text + '\n');
            break;
        default:
            process.stderr.write(chalk.cyan(`\r» ${type.toUpperCase()} « `) + text + '\n');
            break;
    }
};

module.exports.error = (text, type) => {
    console.log(chalk.bold.hex("#000000").bold(`\r» ${type} « `) + text);
};

module.exports.err = (text, type) => {
    console.log(chalk.bold.hex("#ff0000").bold(`\r» ${type} « `) + text);
};

module.exports.warn = (text, type) => {
    console.log(chalk.bgYellow.hex("#000000").bold(`\r» ${type} « `) + text);
};

module.exports.master = (text, type) => {
    console.log(chalk.hex("#ff5208")(`\r» ${type} « `) + text);
};

module.exports.blue = (text, type) => {
    console.log(chalk.hex("#0568f2").bold(`\r» ${type} « `) + text);
};

module.exports.green = (text, type) => {
    console.log(chalk.green.bold(`\r» ${type} « `) + text);
};

module.exports.pink = (text, type) => {
    console.log(chalk.hex("#f205c3").bold(`\r» ${type} « `) + text);
};

module.exports.purple = (text, type) => {
    console.log(chalk.hex("#a700ffff").bold(`\r» ${type} « `) + text);
};

module.exports.banner = (data) => {
    const rdcl = ['blue', 'yellow', 'green', 'red', 'magenta', 'yellowBright', 'blueBright', 'magentaBright'];
    const color = chalk[rdcl[Math.floor(Math.random() * rdcl.length)]];
    console.log(color(data));
};

module.exports.loader = (data, option) => {
    switch (option) {
        case "warn":
            console.log(chalk.hex("#ff5208")(`\r» ${data} « `));
            break;
        case "error":
            console.log(chalk.bold.hex("#ff0000").bold(`\r» ${data} « `));
            break;
        default:
            console.log(chalk.cyan(`\r» ${data} « `));
            break;
    }
};
