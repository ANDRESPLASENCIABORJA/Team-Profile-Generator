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
    }
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