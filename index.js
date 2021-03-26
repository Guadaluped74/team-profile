const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname,"output");
const outPutPath = path.join(OUTPUT_DIR,"team.html");
const render = require("./htmlrendering");

               

const Team = [];
function app() {
    function getManager() {
            inquirer.prompt([
                {
                    type: "input",
                    name: "managerName",
                    massage: "what's the mangers name?",
                },
                {
                    type: "input",
                    name: "managerId",
                    massage: "what's the mangers id?",
                },
                {
                    type: "input",
                    name: "managerEmail",
                    massage: "what's the mangers Email?",
                },
                {
                    type: "input",
                    name: "managerOfficeNumber",
                    massage: "what's the mangers office number?",
                }
                

            ]).then(data => {
                const manager = new Manager(data.managerName, data.managerId, data.managerEmail,data.managerOfficeNumber);
                teamMember.push(manager);
                addingNewMember();
               
            })  
        }  
               
        
    function getEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                massage: "what's the mangers name?",
            },
            {
                type: "input",
                name: "engineerId",
                massage: "what's the mangers id?",
            },
            {
                type: "input",
                name: "engineerEmail",
                massage: "what's the mangers Email?",
            },
            {
                type: "input",
                name: "engineerOfficeNumber",
                massage: "what's the mangers office number?",
            }
            
        
        ]).then(data => {
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail,data.engineerOfficeNumber);
            teamMember.push(engineer);
            addingNewMember();
        })  
    }  
 function getintern() {
     inquirer.prompt([
         {
             type: "input",
             name: "internName",
             massage: "what's the mangers name?",
         },
         {
             type: "input",
             name: "internId",
             massage: "what's the mangers id?",
         },
         {
             type: "input",
             name: "internEmail",
             massage: "what's the mangers Email?",
         },
         {
             type: "input",
             name: "internOfficeNumber",
             massage: "what's the mangers office number?",
         }
         
                        
     ]).then(data => {
         const intern = new Intern(data.internName, data.internId, data.internEmail,data.internOfficeNumber);
         teamMember.push(intern);
         addingNewMember();     
     })  
 }                            
    function addNewEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "selectemployees",
            massage: "what kind employee would like to add?",
            list: [
                "Manager",
                 "engineneer",
                  "intern",
                  "done"
            ]
        }
    ]).then(data => {
        const role = data.selectemployees;
        if( role == "Manager") {
            getManager();
        } else if(role == "engineer"){
            getEngineer();
        } else if(role == "intern"){
            getintern();
        } else if (role == "done"){
            renderTeam();
        }
    
    });
    }
    addNewEmployee()
}
function renderTeam () {
    fs.writeFileSync(outPutPath,render(Team),"utf-8")
     
}
app();