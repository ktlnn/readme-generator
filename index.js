var inquirer = require("inquirer");
const fs = require("fs");
const {generateMarkdown} = require("./utils/generateMarkdown");

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
                    if(description.length < 15){
                        return ("Please provide more details, your description is too short.");
                    }
                    else {
                        return true;
                    }
                }
        },
        {

        }

    ])