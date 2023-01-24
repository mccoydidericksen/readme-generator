// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.desc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)ghib
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## License
  ${data.license}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.tests}
  
  ## Questions
  For any further questions about the application, please email me at: ${data.email}. Visit my [GitHub Profile](${data.username}) to see my other projects.
`;
}

module.exports = generateMarkdown;
