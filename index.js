const inquirer = require('inquirer');
const fs = require('fs');




inquirer
    .prompt(
        [
            {
                name: "title",
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
                name: "Guidelines",
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
        title,
        description,
        installation,
        usage,
        guidelines,
        test,
        email,
        License,
        github
    }) => {
        //template to be used 
        const template = `# ${title}
        * ['Installation'](#installation)
        * ['Usage'](#usage)
        * ['Guidelines'](#guidelines)
        * ['Contributions'](#contributions)
        * ['Credentials'](#credentials)
        * ['License'](#license)
        * ['Test'](#test)
        
        
        # Installation
        ${installation}
        # Usage 
        ${usage}
        # Contribution
        ${contribution}
        # Instructions
        ${instructions}
        # Credentials
        ${credentials}
        # License
        ${license}

        # Contact
        * Github :${github}
        * Email :${email}`;

        createNewFile(title, template);
    }
    );

    
    fs.writeFile(`./s(filename.tolowerCase().split{' '}.join{' '}).nd`, data,(err)=> {
        if(err) {
            console.log(err)
        }
        console.log('Your README has been prepared');
    })




    








    //     ]


    //     const readmeContent = generateHtml(answers);
    //     //    console.log('HContent:', HtmlContent)

    //     fstat.writeFile('README.md', readmeContent, (err) => err ? console.log(err) : console.log("Successful")
    //     );
    // });