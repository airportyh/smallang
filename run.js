const fs = require("mz/fs");
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function main() {
    const filename = process.argv[2];
    if (!filename) {
        console.log("Please provide a .small file.");
        return;
    }
    const astFilename = filename.replace(".small", ".ast");
    const jsFilename = filename.replace(".small", ".js");
    await myExec(`node parse.js ${filename}`);
    await myExec(`node generate.js ${astFilename}`);
    await myExec(`node ${jsFilename}`);
}

async function myExec(command) {
    const output = await exec(command);
    if (output.stdout) {
        process.stdout.write(output.stdout);
    }
    if (output.stderr) {
        process.stdout.write(output.stderr);
    }
}

main().catch(err => console.log(err.stack));