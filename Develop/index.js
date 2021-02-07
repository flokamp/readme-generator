// Packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
  {
    name: 'username',
    type: 'input',
    message: 'What is your GitHub username?'
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email?'
  },
  {
    name: 'name',
    type: 'input',
    message: 'What is the title of your project?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'Describe your project.',
  },
  {
    name: 'installation',
    type: 'input',
    message: 'What are the step-by-step required to install your project?'
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Provide instructions and examples for using your project.'
  },
  {
    name: 'credits',
    type: 'input',
    message: 'List any collaborators, creators of third-party assets, or tutorials you followed.'
  },
  {
    name: 'license',
    type: 'list',
    message: 'Including a license lets other developers know what they can and cannot do with your project. To help you choose a license, go to https://choosealicense.',
    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'Unlicense'],
  },
  {
    name: 'contribution',
    type: 'input',
    message: 'What are the guidelines for how other developers can contribute to your project.'
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