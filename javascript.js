// Bring in our references (or other Libraries)
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generatehtml = (name, location, github) =>`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<body>
   <div class="jumbotron jumbotron fluid">
       <div class="container">
           <h1 class="display-4">Enter your project title. ${name}</h1>
           <p class="lead">Enter your description. ${description}</p>
           <p class="lead">Enter your installation instructions. ${install}</p>
           <p class="lead">Enter your contribution guildeines. ${guidelines}</p>
           <p class="lead">Enter your test instructions. ${test}</p>
           <p class="lead">Enter your email. ${email}</p>
           <p class="lead">Enter your Github Username. ${github}</p>
           
           <h3>Example heading <span class="badge badge-secondary"> contact me</span></h3>
           <ul class="list-group">
               <li class="list-group-item">My github username is ${github}</li>
           </ul>
       </div>
   </div>
    </header>
    
</body>
</html>`



inquirer.prompt([{ name: "name", type:"input", message:"Enter your project title name?"},
{ name: "description", type:"input", message:"Enter a brief description of your project?"},
{ name: "install", type:"input", message:"Enter your installation instructions."},
{ name: "usage", type:"input", message:"Enter your usage information?"},
{ name: "guidelines", type:"input", message:"Enter your contribution guidelines?"},
{ name: "test", type:"input", message:"Enter your test instructions."},
{ name: "email", type:"input", message:"Enter email address?"},
{ name: "github", type:"input", message:"Enter your GitHub Username?"}]).then (answers => {
   const { name, description, install, usage, guidelines, test, email,  github} = answers
   console.log('github:', github)
   console.log('description', description)
   console.log('name:', name)
   console.log('guidelines', guidelines)
   console.log('test', test)
   console.log('email', email)
   console.log('usage', usage)


  const htmlContent = generatehtml(name, description, guidelines, test, email, usage, github)
   console.log('htmlContent:', htmlContent)

   fstat.writeFile('index.html', htmlContent, err => err ? console.log(err) :console.log("Successful"))
})