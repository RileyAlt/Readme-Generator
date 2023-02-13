// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    let badge = '';
  
    switch (license) {
      case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        break;
      case 'Apache':
        badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        break;
      case 'GPL':
        badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        break;
      default:
        badge = '[![License](https://img.shields.io/badge/License-Unlicensed-red.svg)](https://unlicense.org)';
    }
  
    return badge;
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
//   return `# ${data.title}

//   # Title #{data.title}

//   # License
//   ${renderLicenseLink()}

// `;
  console.log("I am in this new function!");
}

module.exports = generateMarkdown;
