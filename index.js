// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs  = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of the ReadME'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of the project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation procedures for the readME'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how the user would use the project in ReadMe'
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter the license for your project'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter how users contributed to the project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests of the project'
    },
]).then(data => {
const template = `
# ${data.title}

## ${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## ${data.installation}

## ${data.usage}

## ${data.license}

## ${data.contributing}

## ${data.tests}

## ${data.questions}
`;
fs.writeFile('README.md', template, err => {
    if (err);
})
});


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
inquirer.prompt


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
