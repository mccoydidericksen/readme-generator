# README Generator

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| <img src="assets/images/js-logo.svg" alt="javascript" width="20"/> JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     |  
| <img src="assets/images/nodejs-icon.svg" alt="html" width="20"/> Node.js    | [https://developer.mozilla.org/en-US/docs/Glossary/Node.js](https://developer.mozilla.org/en-US/docs/Glossary/Node.js) | 
## Description 

This application will generate a professional README.md file for your project based on your responses to prompts in the terminal. Stop wasting time trying to remember markdown syntax and simply answer the questions presented!

## Functionality
![screen-gif](assets/images/screen-functionality.gif)

## Code Snippets
The below function takes an object that contains the user's answers prompts about their project. Using template strings, the entire markdown text is generated to be used for writing to the final .md file. 

```javascript
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}
  ${renderLicenseSection(data.license)}

  For more information, please visit [here](${renderLicenseLink(data.license)}).

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  For any further questions about the application, please email me at: ${data.email}. Visit my [GitHub Profile](${data.username}) to see my other projects.
`;
}
```