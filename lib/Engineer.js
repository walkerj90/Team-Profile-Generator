const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(employeeName, id, email, github) {
    super(employeeName, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
