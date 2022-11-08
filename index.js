const inquirer = require('inquirer');
const fs = require('fs');

const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');

const buildTeam = require('./assets/buildTeam');

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
        ])};

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

        