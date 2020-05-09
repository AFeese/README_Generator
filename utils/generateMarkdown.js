const index = require("../index.js")

function generateMarkdown(data, questions) {
  return `
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg?style=plastic)

# ${data.title}

## Version:
${data.version}




## Description of ${data.title}:
${data.description}




## Table of Contents:
${listQuestionNames(questions).join("\n").toUpperCase()}




## Installation: 
### Use the following instruction to install: 

\`\`\`${data.installation}\`\`\`




## Usage: 
${data.usage}




## License: 
![License](https://img.shields.io/badge/License-${data.license}-blue.svg?style=plastic)




## Contributing: 
${data.contributing}





## Tests: 
\`\`\`${data.tests}\`\`\`




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
