// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
 {
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    message: 'Enter a description for your project:',
    name: 'desc'
  },
  {
    message: 'Enter installation instructions:',
    name: 'install'
  },
  {
    message: 'Enter usage information:',
    name: 'usage'
  },
  {
    message: 'Enter contribution guidelines:',
    name: 'contribution'
  },
  {
    message: 'Enter test instructions:',
    name: 'test'
  },
  {
    message: 'Enter your github username:',
    name: 'username'
  },
  {
    message: 'Enter your email address:',
    name: 'email'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((resp) => {
            const markdownText = generateMarkdown(resp)
            console.log(markdownText)
        });
}

// Function call to initialize app
init();
