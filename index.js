// added consts here to "talk to" inquire, generateMarkdown and file system 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs  = require('fs');
// prompt the user to fill in the readme
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project. (Required)',
        validate : titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'badge',
        message: 'Select which license you utilized for this project.',
        choices: ['Apache', 'MIT', 'ISC', 'Mozilla']
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of your project. (Required)',
        validate : descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter the description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation procedures for the project. (Required)',
        validate : installInput => {
            if(installInput) {
                return true;
            } else {
                console.log('Please enter the installation procedures for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how the user would use the project in ReadMe. (Required)',
        validate : usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter how the user may use your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter how this project is licensed (Required)',
        validate : licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log('Please enter the project is licensed!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Did you have any contributions when creating this from other developers?',
        default: true
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter how users contributed to the project.',
        when: ({ confirmContributing }) => confirmContributing
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Did you use any tests to ensure your project worked?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter tests of the project',
        when: ({ confirmTests }) => confirmTests
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your work email? (Required)',
        validate : emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter the email associated to you so users may ask you questions about your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate : githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter the github username associated to you so users may view your source code!');
                return false;
            }
        }
    },
// I used a .then function instead of utilzing the generateMarkdown
]).then(data => {
const template = `
# ${data.title}
${generateMarkdown.renderLicenseBadge(data.badge)}
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
This is licensed under 
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
// writeFile function to generate the user input data to the README File
fs.writeFile('README.md', template, err => {
    if (err);
})
});