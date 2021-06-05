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
                message: 'what is the employees name?',
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
            }
