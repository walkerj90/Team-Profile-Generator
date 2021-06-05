const inquirer = require("inquirer");
const fs = require("fs");
const emailValidate = require("email-validator");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const makePage = require("./src/makePage.js");

let team = [];
let firstRun = true;

const main = () => {
    inquirer
        .prompt([
            {
                name: 'employeeName',
                type: 'input',
                message: 'Please input the employees name',
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log('no valid input')
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: 'Please input the employees ID',
                validate: (id) => {
                    if (!isNaN(id)) {
                        return true;
                    } else {
                        console.log(' - not a valid input');
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: 'Please input the employees E-mail address',
                validate: email => {
                    if (emailValidate.validate(email)) {
                        return true;
                    } else {
                        console.log(" - not a valid e-mail")
                        return false;
                    }

                }
            }
        ])
                // Runs if this is the first iteration.
                .then(({ employeeName, id, email }) => {
                    if (firstRun === true) {
                        firstRun = false;
                        inquirer
                            .prompt(
                                {
                                    name: 'officeNumber',
                                    type: 'input',
                                    message: 'Office number?'
                                }
                            )
                            .then((officeNumber) => {
                                let manager = new Manager(employeeName, id, email, officeNumber);
                                team.push(manager);
                                inquirer
                                    .prompt({
                                        name: 'menu',
                                        type: 'list',
                                        message: 'Main Menu - Please select an option',
                                        choices: ['Add a team member', 'Generate HTML file']
                                    })
                                    .then(({ menu }) => {
                                        if (menu === 'Add a team member') {
                                            main();
                                        } else {
                                            // Creates the team dashboard webpage.
                                            makePage(team);
                                        }
                                    })
                            })
                                        } else {
                // Allows the addition of other team members.
                inquirer
                    .prompt(
                        {
                            name: 'selection',
                            type: 'list',
                            message: 'What is this member\'s role?',
                            choices: ['Engineer', 'Intern', 'Manager']
                        }
                    )
                    // Adds Engineer
                    .then(({ selection }) => {
                        if (selection === 'Engineer') {
                            inquirer
                                .prompt(
                                    {
                                        name: 'github',
                                        type: 'input',
                                        message: 'GitHub username?'
                                    }
                                )
                                .then((github) => {
                                    let engineer = new Engineer(employeeName, id, email, github);
                                    team.push(engineer);
                                    inquirer
                                        .prompt({
                                            name: 'menu',
                                            type: 'list',
                                            message: 'Main Menu - Please select an option',
                                            choices: ['Add a team member', 'Generate HTML file']
                                        })
                                        .then(({ menu }) => {
                                            if (menu === 'Add a team member') {
                                                main();
                                            } else {
                                                // Creates the team dashboard webpage.
                                                makePage(team);
                                            }
                                        })
                                })
                            } else {
                                // Allows the addition of other team members.
                                inquirer
                                    .prompt(
                                        {
                                            name: 'selection',
                                            type: 'list',
                                            message: 'What is this member\'s role?',
                                            choices: ['Engineer', 'Intern', 'Manager']
                                        }
                                    )
                                    // Adds Engineer
                                    .then(({ selection }) => {
                                        if (selection === 'Engineer') {
                                            inquirer
                                                .prompt(
                                                    {
                                                        name: 'github',
                                                        type: 'input',
                                                        message: 'GitHub username?'
                                                    }
                                                )
                                                .then((github) => {
                                                    let engineer = new Engineer(employeeName, id, email, github);
                                                    team.push(engineer);
                                                    inquirer
                                                        .prompt({
                                                            name: 'menu',
                                                            type: 'list',
                                                            message: 'Main Menu - Please select an option',
                                                            choices: ['Add a team member', 'Generate HTML file']
                                                        })
                                                        .then(({ menu }) => {
                                                            if (menu === 'Add a team member') {
                                                                main();
                                                            } else {
                                                                // Creates the team dashboard webpage.
                                                                makePage(team);
                                                            }
                                                        })
                                                })
                                        }
                                                                // Adds Intern
                        if (selection === 'Intern') {
                            inquirer
                                .prompt(
                                    {
                                        name: 'school',
                                        type: 'input',
                                        message: 'School?'
                                    }
                                )
                                .then((school) => {
                                    let intern = new Intern(employeeName, id, email, school);
                                    team.push(intern);
                                    inquirer
                                        .prompt({
                                            name: 'menu',
                                            type: 'list',
                                            message: 'Main Menu - Please select an option',
                                            choices: ['Add a team member', 'Generate HTML file']
                                        })
                                        .then(({ menu }) => {
                                            if (menu === 'Add a team member') {
                                                main();
                                            } else {
                                                // Creates the team dashboard webpage.
                                                makePage(team);
                                            }
                                        })
                                })
                        }