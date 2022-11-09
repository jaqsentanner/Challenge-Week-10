const inquirer = require('inquirer');
const fs = require('fs');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const buildTeam = require('./assets/buildTeam');

const team = [];

function addManager() {
    console.log('Create your Dev Team!');
    inquirer
        .prompt([
            {
                type:'input',
                name: 'manager1',
                message: 'Enter the Team Manager Name',
            },
            {
                type: 'number',
                name: 'managerID',
                message: 'Enter the manager ID',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Enter the email for the Team Manager'
            },
            {
                type: 'number',
                name: 'officeNumber',
                message: 'Enter Manager Office Telephone'
            }
        ])
        
        .prompt(addIntern());
    };

function addIntern() {
    inquirer
        .prompt([
            {
                type:'input',
                name: 'intern',
                message: 'Enter the name of your Intern!',
            },
            {
                type: 'number',
                name: 'internID',
                message: 'Enter the Intern ID',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter the email for the Intern'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Where did this Intern attend school?'
            }
        ])};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineer',
                message: 'Add an Engineer to your team!'
            },
            {
                type: 'number',
                name: 'engineerID',
                message: 'Enter the Engineer ID',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the email for this Engineer',
            },
            {
                type: 'input',
                name: 'engineerGH',
                message: 'Enter the GitHub username for this Engineer'
            }
        ])};

        
     addManager();   
        