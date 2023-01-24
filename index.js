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
    type: 'list',
    message: 'Select your license:',
    name: 'license',
    choices: ['The Unlicense', 'MIT License', 'Boost Software License 1.0', 'Apache License 2.0']
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            throw err
        }})
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((resp) => {
            resp.username = "https://github.com/" + resp.username
            const markdownText = generateMarkdown(resp)
            writeToFile('README-Output.md', markdownText)
        });
}

// Function call to initialize app
init();
