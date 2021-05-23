// This file runs the application here we should use inquirer to collect information from the users
// Include packages needed for this application
// const inquirer = require('inquirer');
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');

// Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'Hello manager! What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'Please type your email adress',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber',
    },
    {
        type: 'checkbox',
        name: 'team',
        message: 'Would you like to add members to your team?',
        choices: ['Engineer', 'Intern', 'Employee'],
    },
    {
        type: 'input',
        message: 'What is your Engineer name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'Type your Engineer id number',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is your engineer email?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'Type your Engineer github',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Type your Intern name',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'Type your Intern id number',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'Type your Intern email',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Type your Intern school',
        name: 'school',
    },
    {
        type: 'confirm',
        message: 'Do you want to add another member to your team?',
        name: 'confirmation',
    },

];
   

//Now write a function if else that determines the choices of the checkbox


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('index.html', generateHtml(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile(data);
        });

}

// Function call to initialize app
init();