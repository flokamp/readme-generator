// Packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'What is a description of your project?',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
  },
  {
    name: 'credits',
    type: 'input',
    message: 'List any collaborators with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence. If you followed tutorials, include those links.'
  },
  {
    name: 'license',
    type: 'list',
    message: 'The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/',
    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'Unlicense', 'No License'],
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'If you would like other developer to contribute, add guidelines for how to do so.'
  },
  {
    name: 'tests',
    type: 'input',
    message: 'Write tests for your application and provide examples on how to run them.'
  },
];


// Function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(data => {
    // Function to write README file
    const filename = data.name.toLowerCase() + '.md';
    fs.writeFile(filename, generateMarkdown(data), (err) => {

      if (err) {
        return console.log(err)
      }

      console.log("Success!")

    });
  });
}

// Function call to initialize app
init();