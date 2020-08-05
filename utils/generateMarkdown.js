// function to generate markdown for README
function generateMarkdown(data) {
    return `
    # Table of Contents
    * [Username](#username)
    * [Title](#title)
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributors](#contributors)
    * [License](#license)
    
    ##Github Username
    ![Github](https://img.shields.io/github/license/${data.username}/${data.repo})

    ##Title
    ${data.title}

    ##Description
    ${data.description}

    ##Installation
    ${data.installation}

    ##Usage
    ${data.usage}

    ##Contributors
    ${data.contributors}

    ##License
    ${data.license}
    
  
  `;
  }
  
  module.exports = generateMarkdown;