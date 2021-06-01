const inquirer = require('inquirer');
const fs = require('fs');




function licenseBadge(data) {
    const licenseType = data.License[0];
    let licenseString = " "
    if (licenseType === "MIT") {
        license =  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    };
    if (licenseType === "Apache") {
        license =  `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    };
    if (licenseType === "GPL") {
        license =  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };

    if (licenseType === "N/A") {
        license =  `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    };

    if (licenseType === "GMU") {
        license =  `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    };

    return licenseString
}


inquirer
    .prompt(
        [
            {
                name: "Title",
                type: "input",
                message: "Whats the project title?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },

            {
                name: "Description",
                type: "input",
                message: "Enter a brief description of your project?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },

            {
                name: "Installation",
                type: "input",
                message: "Any credentials?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Usage",
                type: "input",
                message: "How do you use your app?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Contributions",
                type: "input",
                message: "Enter your contributions?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Test",
                type: "input",
                message: "Enter your test instructions.",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "License",
                type: "list",
                message: "What license did you use?",
                choices: ['MIT', 'GPL', 'Apache', 'ISC', 'GMU', 'N/A'],
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Questions",
                type: "input",
                message: "If there are any questions, please fill free to leave comments below or contact me with the information provided below here?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },

            {
                name: "Email",
                type: "input",
                message: "Enter email address?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Github",
                type: "input",
                message: "Enter your GitHub Username?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
        ]
    ).then(({
        Title,
        Description,
        Instructions,
        Contributions,
        Installation,
        Usage,
        Test,  
        License,
        Questions,
        Email,
        Github
        
    }) => {
        //template to be used 
        const template = `# ${Title}
* Table of Contents
* ['Installation'](#installation)
* ['Usage'](#usage)
* ['Instructions'](#instructions)
* ['Decscription'](#description)
* ['Contributions'](#contributions)
* ['Credentials'](#credentials)
* ['License'](#license)
* ['Test'](#test)
* ['Questions'](#questions)

        
# Title
${Title}
# Installation
${Installation}
# Usage 
${Usage}
# Description
${Description}
# Contributions
${Contributions}
# Instructions
${Instructions}
# License


This application is covered by the ${License} Licsense.
# Test
${Test}

# Questions
${Questions}
* Github :${Github}
* Email :${Email}`;

        createNewFile(Title, template);
    }
    );

    
    function createNewFile(Title, template) {
    fs.writeFile(`${Title}.md`, template, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('Your README has been prepared');
    })
}





    








    //     ]


    //     const readmeContent = generateHtml(answers);
    //     //    console.log('HContent:', HtmlContent)

    //     fstat.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log("Successful")
    //     );
    // });