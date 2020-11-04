// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require('./Employee')


class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;

    }
    getRole() {
        return this.role
    }
}

module.exports = Engineer