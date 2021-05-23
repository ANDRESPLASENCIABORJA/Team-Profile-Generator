// This file is related to the class of managers here goes all the information that they are going to provide to us
//At first we import the parent class
const Employee = require('./Employee');

//Lets create a constructor for manager
class Manager extends Employee {
    constructor(name, id, email, role, officeNumber){
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    
}

//Tests
// const pilar = new Manager ('Pilar1', 1234, 'pilar98loc@gmail.com', 'Manager', 99);

// console.log(pilar.getName());
// console.log(pilar.getId());
// console.log(pilar.getEmail());
// console.log(pilar.getRole());
// console.log(pilar.officeNumber);

//Before anything lets export the class
module.exports = Manager;