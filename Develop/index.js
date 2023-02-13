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
      message: 'What is your name'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can be used to contact you?'
    },
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
      message: 'do you need to install anything to run your project?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'WWhat license would you like to use?',
      choices: ['MIT', 'Apache', 'GPL']
    },
];

function renderAuthorInfo(answers) {
  return `
  ### Author
  ${answers.name}

  If you'd like to contact me, please email ${answers.email} or call ${answers.phoneNUmber}
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

function generateReadme(answers){
  // At this point, answers is a hash of question_names => entered values
  // Example: { titleOfProject: "README Generator", name: "Riley Altenburg", ... }

  let readme = `
    # ${answers.titleOfProject}

   ${renderAuthorInfo(answers)}

   ${renderDescription(answers)}

   ${renderInstallation(answers)}

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

  generateMarkdown();

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
