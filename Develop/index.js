// Packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
  {
    name: 'username',
    type: 'input',
    message: 'What is your GitHub username?',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must enter a Github username.");
      }
      return true;
    }
  },
  {
    name: 'email',
    type: 'input',
    message: 'What is your email?',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must enter your email.");
      }
      return true;
    }
  },
  {
    name: 'name',
    type: 'input',
    message: 'What is the title of your project?',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must enter your project title.");
      }
      return true;
    }
  },
  {
    name: 'description',
    type: 'input',
    message: 'Describe your project.',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must enter a project description.");
      }
      return true;
    }
  },
  {
    name: 'installation',
    type: 'input',
    message: 'What are the step-by-step instructions to install your project?',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must provide installation instructions.");
      }
      return true;
    }
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Provide instructions and examples for using your project.',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("You must provide instructions or examples for using your project.");
      }
      return true;
    }
  },
  {
    name: 'credits',
    type: 'input',
    message: 'List any collaborators, creators of third-party assets, or tutorials you followed.'
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
  {
    name: 'license',
    type: 'list',
    message: 'Including a license lets other developers know what they can and cannot do with your project. To help you choose a license, go to https://choosealicense.',
    choices: ['Apache License 2.0', 'Boost Software License 1.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'MIT License', 'Mozilla Public License 2.0', 'Unlicense'],
  }
];


// Function to initialize app
const init = () => {
  inquirer.prompt(questions)
  .then(data => {
    // Function to write README file
    const filename = 'README.md';
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