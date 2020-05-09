const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your README?"
    },
    {
        type: "input",
        name: "version",
        message: "What version is your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter the prompt users should use for installation:",
        default: "npm i"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how the program will be used:"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license package should your project have?",
        choices: [ 
            "Apache%202.0",
            "BSD%203",
            "MIT"
        ]
    },
    {
        type: "input", 
        name: "contributing", 
        message: "Enter the usernames of those who are contributing, separated by commas: "
    },
    {
        type: "input", 
        name: "tests", 
        message: "Specify command needed for tests to be run:",
        default: "npm test"
    },
    {
        type: "input",
        name: "contact",
        message: "Enter your GitHub username and email, separated by a comma:"
    },

];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            console.log(err);
        }

        console.log("success");
    }) 
}

function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        const template = generateMarkdown(data, questions);
        // console.log(template);
        console.log(data);
        writeToFile("README.md", template);
    })

}

init();
