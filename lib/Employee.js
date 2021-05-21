// This file is related to the class of employees here goes all the information that they are going to provide to us
// This first class is the parent class and will have the following properties and methods

//Create constants to require all the sub classes 
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");

//Now create a constructor function that takes all the properties that i want for those classes
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //Now use the first method getName()
    getName (name){
        this.name += name;
        this.names.push(name);
        console.log(`Person with ${name}`);
    }
    //Second method getId()
    getId (id){
        this.id += id ;
        this.names.push(id);
        console.log(`Person with ${id}`);
    }
    //Third method getEmail()
    getEmail (email){
        this.email += email ;
        this.emails.push(email);
        console.log(`Person with ${email}`);
    }
    //Fourth method getRole()
    getRole (role){
        this.role += role ;
        this.roles.push(role);
        console.log(`Person with ${role}`);
    }
}

