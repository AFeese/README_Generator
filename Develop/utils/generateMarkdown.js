const index = require("../index.js")

function generateMarkdown(data, questions) {
  return `
  ![NPM](https://img.shields.io/npm/l/${data.license}?style=plastic)

# ${data.title}

## Version:
${data.version}


## Description of ${data.title}:
${data.description}


## Table of Contents:
${listQuestionNames(questions).join("\n").toUpperCase()}


## Installation: 
### Use the following instruction to install: 

${data.installation}


## Usage: 
${data.usage}


## License: 
${data.license}


## Tests: 


## Contributing: 



## Installation: 
Use the following instruction to install: 

${data.installation}


### Questions? Contact:
${data.contact}

`;
}


function listQuestionNames(questionsArray){
  const newArray = [];
  questionsArray.forEach(function(objectInQuestions){
    newArray.push(`* ${objectInQuestions.name}`);
  });
   
  return newArray;
}


module.exports = generateMarkdown;
