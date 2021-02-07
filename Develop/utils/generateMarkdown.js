// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
  if (license === 'Apache License 2.0') {
    let license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return license;
  }
  else if (license === 'Boost Software License 1.0') {
    let license = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    return license;
  }
  else if (license === 'GNU AGPLv3') {
    let license = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0`
    return license;
  }
  else if (license === 'GNU GPLv3') {
    let license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    return license;
  }
  else if (license === 'GNU LGPLv3') {
    let license = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    return license;
  }
  else if (license === 'MIT License') {
    let license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    return license;
  }
  else if (license === 'Mozilla Public License 2.0') {
    let license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    return license;
  }
  else if (license === 'Unlicense') {
    let license = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    return license;
  }
  
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const license = data.license

return `# ${data.name}

${renderLicenseBadge(license)}
## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}
`
}

module.exports = generateMarkdown;
