const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const render = require("./lib/htmlRenderer")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const team = []

main()

function main() {
    var questions = [
        {
            type: "list",
            message: "Choose your employee",
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
            name: 'employee'
        }]
    inquirer.prompt(questions)
        .then(answers => {
            if (answers.employee == "Manager") {
                createManager()
            }
            else if (answers.employee == "Engineer") {
                createEngineer()
            }
            else if (answers.employee == "Intern") {
                createIntern()
            }
            else {
                console.log(team)
                renderPage(team)
            }

        })
        .catch(error => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log("Some Error Occured")
            }
        });

}




function createManager() {
    var questions = [
        {
            type: "input",
            name: 'id',
            message: 'Enter Manager ID: ',
        },
        {
            type: "input",
            name: 'name',
            message: 'Enter Manager Name: ',
        },
        {
            type: "input",
            name: 'email',
            message: 'Enter Manager Email: ',
        },
        {
            type: "input",
            name: 'officeNumber',
            message: 'Enter Manager Office Number: ',
        }

    ];
    inquirer.prompt(questions)
        .then(answers => {
            let manager = new Manager(
                answers.id,
                answers.name,
                answers.email,
                answers.officeNumber);
            team.push(manager)
            console.log(team)
            main()
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log("Some Error Occured")
            }
        });
}

function createEngineer() {
    var questions = [
        {
            type: "input",
            name: 'engineer_id',
            message: 'Enter engineer ID: ',
        },
        {
            type: "input",
            name: 'engineer_name',
            message: 'Enter Engineer Name: ',
        },
        {
            type: "input",
            name: 'engineer_email',
            message: 'Enter engineer Email: ',
        },
        {
            type: "input",
            name: 'engineer_github',
            message: 'Enter Engineer Github: ',
        }
    ];
    inquirer.prompt(questions)
        .then(answers => {
            let engineer = new Engineer(answers.engineer_id, answers.engineer_name, answers.engineer_email, answers.engineer_github);
            team.push(engineer)
            console.log(team)

            main()
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log("Some Error Occured")
            }
        });
}

function createIntern() {
    var questions = [
        {
            type: "input",
            name: 'intern_id',
            message: 'Enter intern ID: ',
        },
        {
            type: "input",
            name: 'intern_name',
            message: 'Enter Intern Name: ',
        },
        {
            type: "input",
            name: 'intern_email',
            message: 'Enter intern Email: ',
        },
        {
            type: "input",
            name: 'intern_school',
            message: 'Enter Intern School: ',
        }
    ];
    inquirer.prompt(questions)
        .then(answers => {
            let intern = new Intern(answers.intern_id, answers.intern_name, answers.intern_email, answers.intern_school);
            team.push(intern)
            console.log(team)

            main()
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log(error)
            } else {
                console.log("Some Error Occured")
            }
        });
}


function renderPage(team) {
    render(team);
    fs.writeFileSync(outputPath, render(team), 'utf-8');
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
