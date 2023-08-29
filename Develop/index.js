const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
console.log("This is my README Generator! Generate README's to your hearts content!")
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:'What is the title of your Project?'
    },
    {
        type:'input',
        name:'description',
        message:'How would you describe your Project?'
    },
    {
        type:'input',
        name:'use',
        message:'How do you use your project?'
    },
    {
        type:'input',
        name:'motiv',
        message:'What was your motivation?'
    },
    {
        type:'input',
        name:'reason',
        message:'Why did you build this project?'
    },
    {
        type:'input',
        name:'problem',
        message:'What problem did this solve?'
    },
    {
        type:'input',
        name:'learn',
        message:'What did you learn?'
    },
    {
        type:'input',
        name:'stand',
        message:'What makes your project stand out?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err){
            return console.log(err)
        }

        console.log("Perfect! You can now see your newly generated README file!")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();
