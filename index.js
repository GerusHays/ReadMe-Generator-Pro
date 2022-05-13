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
    {
        type: 'input',
        name: 'email',
        message: 'What is your work email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
]).then(data => {
const template = `
# ${data.title}

## Description 
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
${data.installation}

## Usage 
${data.usage}

## License 
${data.license}

## Contributing 
${data.contributing}

## Tests 
${data.tests}

## Questions
If you have any questions about this project you may reach me below at: </br> 
${data.email}</br>
Also you may check out my github link below at: </br>
https://github.com/${data.github}
`;
fs.writeFile('README.md', template, err => {
    if (err);
})
});


// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}
// inquirer.prompt


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
