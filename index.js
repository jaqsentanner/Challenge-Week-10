const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const buildTeam = require('./assets/buildTeam');
const { ADDRGETNETWORKPARAMS } = require('dns');

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
        ]) .then(response => {
            const person = new Manager(response.manager1, response.managerID, response.managerEmail, response.officeNumber);
            team.push(person);
            createTeam();
        })

    };

function createTeam() {
        inquirer
            .prompt([{
                type: 'list',
                name: 'memberRole',
                message: 'Add another Team Member!',
                choices: ['Engineer', 'Intern', 'Build Team']
            }]) .then (chosen => {
                switch (chosen.memberRole) {
                    case 'Engineer': 
                        addEngineer();
                        break;
                    case 'Intern':
                        addIntern();
                        break;
                    case 'Build Team':
                        buildTeam();
                }
            })
    }

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
        ]) .then (response => {
            const int = new intern(response.intern, response.internID, response.internEmail, response.school);
            team.push(int);
            console.log(team);
        })
    };

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
        ]) .then (response => {
            const dev = new Engineer(response.engineer, response.engineerID, response.engineerEmail, response.engineerGH);
            team.push(dev);
            createTeam();
    })};

        
     addManager();   
     
        