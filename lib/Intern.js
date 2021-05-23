// This file is related to the class of interns here goes all the information that they are going to provide to us
//At first we import the parent class
const Employee = require('./Employee');

//Lets create a constructor for engineer
class Intern extends Employee {
    constructor(name, id, email, role, school){
        super(name, id, email, role);
        this.school = school;
    }
    getSchool (){
        return this.school;
    }
    
}

//Tests
// const rebe = new Intern ('Rebe1', 2325, 'rebe98loc@gmail.com', 'intern', 'Anahuac');

// console.log(rebe.getName());
// console.log(rebe.getId());
// console.log(rebe.getEmail());
// console.log(rebe.getRole());
// console.log(rebe.getSchool());
//Before anything lets export the class

module.exports = Intern;

// benefits or advantages of object oriented programming (using classes)
