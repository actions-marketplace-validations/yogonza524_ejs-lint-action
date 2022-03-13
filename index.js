const core = require('@actions/core');
const github = require('@actions/github');
const ejsLint = require('ejs-lint');
const fs = require('fs');
regex = new RegExp('[*.ejs]$');

try {
    const folder = core.getInput('folder');

    console.log(`Folder: ${folder}`);
    const files = fs.readdirSync(folder);

    console.log(`files: ${files}`)

    const filesArray = files
        .toString()
        .split(",")
        .map(function(file, index) {
            const ejs = file.split('.').filter(filePart => filePart.length > 1);
            if (ejs && ejs[1] == 'ejs') {
                return file;
            }
        })
        .filter(item => item !== undefined);

    filesArray.forEach(file => {
        console.log(`EJS File: ${file}`);

        var text = fs.readFileSync(`${folder}/${file}`).toString('utf-8');

        const validation = ejsLint(`${text}`);

        // console.log(`Validation: ${validation}`);
        if (validation) {
            throw new Error(validation);
        }

    });
} catch(error) {
    core.setFailed(error.message);
}