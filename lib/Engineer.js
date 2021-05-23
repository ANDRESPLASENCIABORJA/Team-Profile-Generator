// This file is related to the class of engineers here goes all the information that they are going to provide to us
//At first we import the parent class
const Employee = require('./Employee');

//Lets create a constructor for engineer
class Engineer extends Employee {
    constructor(name, id, email, role, github) {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

}
console.log(Employee);
//Tests
// const rebe = new Engineer('Carlos1', 2327, 'carlos98loc@gmail.com', 'Engineer', 'CARLOSBM');

// console.log(rebe.getName());
// console.log(rebe.getId());
// console.log(rebe.getEmail());
// console.log(rebe.getRole());
// console.log(rebe.getGithub());


//Before anything lets export the class

module.exports = Engineer;

