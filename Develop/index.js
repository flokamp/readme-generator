// Packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
const questions = [
  {
    name: 'name',
    type: 'input',
    message: 'What is your project title?',
  },
  {
    name: 'description',
    type: 'input',
    message: 'What is your project description?',
  },
  {
    name: 'license',
    type: 'list',
    message: 'How is this project licensed?',
    choices: ['BSD', 'MIT', 'GPL'],
  },
  {
    name: 'installation',
    type: 'input',
    message: 'What are the instructions for installing?',
  },
  {
    name: 'usage',
    type: 'input',
    message: 'Describe the usage.',
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