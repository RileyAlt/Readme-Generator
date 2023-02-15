// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const QUESTIONS = [
    {
      type: 'input',
      name: 'titleOfProject',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'gituser',
      message: 'What is your Github Username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can be used to contact you?'
    },
    // {
    //   type: 'input',
    //   name: 'tableOfContents',
    //   message: 'What was the motivation for the project?'
    // },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was the motivation for the project?'
    },
    {
      type: 'input',
      name: 'building',
      message: 'What was the project build for?'
    },
    {
      type: 'input',
      name: 'solved',
      message: 'What did this project solve?'
    },
    {
      type: 'input',
      name: 'learning',
      message: 'What did you learn from the project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Do you need to install anything to run your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Show off how it works here: '
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use?',
      choices: ['MIT', 'Apache', 'GPL']
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Please list any and all who contributed to the project'
    },
    {
      type: 'list',
      name: 'tests',
      message: 'Any tests run?',
      choices: ['Yes', 'No']
    },
  
];
//Correctly displaying asnwers on readme document
function renderAuthorInfo(answers) {
  return `
  ### Author
  ${answers.name}

  If you'd like to contact me, please email ${answers.email}
  `;
}

function renderGitUser(answers) {
  return `
  ### GitHub Information 
  
  Find my Repository information here ${answers.gituser}
  `;
}

function renderDescription(answers) {
  return `
  ### Description

  My Motivation for the project was ${answers.motivation}
  The project was built ${answers.building}
  This solved ${answers.solved}
  What I learn from the project was ${answers.learning}
  `;
}

function renderInstallation(answers) {
  return `
  ### Installation 

  If any what Items need to be installed to run properly? ${answers.installation}
  `;
}

function renderUsage(answers) {
  return `
  ### Usage 

  The program runs as follows: ${answers.usage}
  `;
}

function renderLicense(answers) {
  return `
  ### Licensing 

    ${answers.license}
  `;
}

function renderContributions(answers) {
  return `
  ### Contributors 

    ${answers.contributions}
  `;
}

function renderTests(answers) {
  return `
  ### Testing

    ${answers.tests}
  `;
}


function generateReadme(answers){
  // At this point, answers is a hash of question_names => entered values
  // Example: { titleOfProject: "README Generator", name: "Riley Altenburg", ... }

  let readme = `
    # ${answers.titleOfProject}

   ${renderAuthorInfo(answers)}
   
   ${renderGitUser(answers)}

   ${renderDescription(answers)}

   ${renderInstallation(answers)}

   ${renderUsage(answers)}

   ${renderLicense(answers)}

   ${renderContributions(answers)}

   ${renderTests(answers)}

  `;

  fs.writeFile('GENERATED_README.md', readme, (err) => {
    if (err)
      console.log("I got an error!", err);
    else {
      console.log("README generated successfully\n");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log("Starting initialization of the app");

  // generateMarkdown();

  inquirer
    .prompt(QUESTIONS)
    .then(answers => {
      console.log("I have recieved some answers!");
      console.log(JSON.stringify(answers, null, 4));
      generateReadme(answers);
    })
    .catch(error => {
      console.error(error);
    });
}


// Function call to initialize app
init();
