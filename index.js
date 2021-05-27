const inquirer = require('inquirer');
const fs = require('fs');




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
                message: "Enter your contribution guidelines?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Test",
                type: "input",
                message: "Enter your test instructions.",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "Email",
                type: "input",
                message: "Enter email address?",
                validate: (value) => { if (value) { return true } else { return 'I need a value to continue' } },
            },
            {
                name: "License",
                type: "list",
                message: "What license did you use?",
                choices: ['The MIT Lisence', 'The GPL License', 'Apache License', 'The ISC License', 'The GMU License', 'N/A'],
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
        Email,
        License,
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
        [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
        
        This application is covered by the ${License} Licsense.
        # Test
        ${Test}

        # Contact
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