
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Usage](#usage)
  - [Motivation](#motivation)
  - [Reason](#reason)
  - [Problem](#problem)
  - [Lessons](#lessons)
  - [Stand](#stand)

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

`;
}

module.exports = generateMarkdown;
