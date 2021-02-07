// TODO: Include packages needed for this application
const fs = require('fs')
var inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
    choices: ['BSD', 'MIT', 'GPL'],
  },
];


// TODO: Create a function to initialize app
const init = () => {
  inquirer.prompt(questions)

  // TODO: Create a function to write README file
  .then(data => {
  console.log(generateMarkdown(data))
    const filename = data.name.toLowerCase() + '.md';
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

      if (err) {
        return console.log(err)
      }

      console.log("Success!")

    });
  });
}

// Function call to initialize app
init();