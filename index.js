var inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter your GitHub username:",
            name: "username"

        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Please provide a detailed description of your project:",
            name: "description",
            validate: description => {
                if (description.length < 15) {
                    return ("Please provide more details, your description is too short.");
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Please provide steps for installation process of your project.",
            name: "installation",
            validate: installation => {
                if(installation.length < 10){
                    return ("Valid installation process is required. Please write out the steps.")
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Please describe how to use your project/application.",
            name: "usage",
            validate: usage => {
                if(usage.length < 10){
                    return "Usage is too short. Please provide a longer explanation."
                }
                else {
                    return true;
                }
            }
        },
        {
            type: "input",
            message: "Who are the contributor(s) for this project?",
            name: "contributors",
            validate: contributors => {
                if(contributors.length < 5){
                    return "Name of contributor(s) is required."
                }
                else {
                    return true;
                }
            } 
        },
        {
            type: "checkbox",
            message: "Which license(s) are you using in your project?",
            name: "license",
            choices: [
                "None",
                "MIT",
            ]
        },


    ])