const fs = require("fs");
const inquirer = require("inquirer");
const { prompt } = require("inquirer");

// questions to generate README
const questions = [
    {
        name: 'title',
        message: 'What is the apps title?'
    },
    {
        name: 'description',
        message: 'Please describe the app?'
    },
    {
        name: 'installation',
        message: 'How do you install the app?'
    },
    {
        name: 'usage',
        message: 'How do you use the app?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'GPLv3', 'AGPL'],
        message: 'Please select a license'
    },
    {
        name: 'contributions',
        message: 'Who made contributions?'
    },
    {
        name: 'tests',
        message: 'Tests you would like to perform?'
    },
    {
        name: "username",
        message: "Please enter your Github username"
    },
    {
        name: "email",
        message: "Please enter your email?"
    }
];

function generateMarkdown(data) {
    return `
# ${data.title}

${data.license}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Test](#test)
* [Questions](#questions)

## Description
${data.description}

## Installation 
${data.installation}

## Usage 
${data.usage}

## License
${data.license}

## Contributors
${data.contributions}

## Test
${data.test}

## Questions
For questions, you can contact the developer at:

Github:[${data.username}]

Email:[${data.email}]
`
};

//funtion initializes app
function init() {
    prompt(questions).then(input => {
        const response = generateMarkdown(input);
        fs.writeFile("README.md", response, error => {
            if (error) {
                throw error;
            }
        })
    });
}
init();