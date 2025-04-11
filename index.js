// index.js
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import generateMarkdown from './Utils/generateMarkdown.js';

const questions = [
  { type: 'input', name: 'title', message: 'What is your project title?' },
  { type: 'input', name: 'description', message: 'Write a short description of your project:' },
  { type: 'input', name: 'installation', message: 'What are the installation instructions?' },
  { type: 'input', name: 'usage', message: 'How do you use this app?' },
  { type: 'list', name: 'license', message: 'Choose a license:', choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'] },
  { type: 'input', name: 'contributing', message: 'What are the contribution guidelines?' },
  { type: 'input', name: 'tests', message: 'What are the test instructions?' },
  { type: 'input', name: 'github', message: 'What is your GitHub username?' },
  { type: 'input', name: 'email', message: 'What is your email address?' }
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log('✅ Successfully created README.md!')
  );
}

function init() {
  inquirer.prompt(questions).then(answers => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });
}

init();