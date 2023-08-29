
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  [License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Motivation](#motivation)
  - [Reason](#reason)
  - [Problem](#problem)
  - [Lessons](#lessons)
  - [Stand](#stand)
  - [Contact](#contact)

  ## Description:
  ${data.description}
  ## Usage:
  ${data.use}
  ## Motivation:
  ${data.motiv}
  ## Reason:
  ${data.reason}
  ## Problem:
  ${data.problem}
  ## Lessons:
  ${data.learn}
  ## Stand:
  ${data.stand}
  ## Contact
  - Github: [${data.github}] [(https://github.com/${data.github})]
  - Email: [${data.email}]

`;
}

module.exports = generateMarkdown;
