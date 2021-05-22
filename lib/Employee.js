// This file is related to the class of employees here goes all the information that they are going to provide to us
// This first class is the parent class and will have the following properties and methods



//Now create a constructor function that takes all the properties that i want for those classes
class Employee {
    constructor(name, id, email, employee){
        this.name = name;
        this.id = id;
        this.email = email;
        this.employee = employee;
    }
    //Now use the first method getName()
    getName (){
        return this.name;
    }
    //Second method getId()
    getId (){
        return this.id;
    }
    //Third method getEmail()
    getEmail (){
        return this.email
    }
    //Fourth method getRole()
    getRole (){
        return this.employee
    }
}

//Example
//A class is the representation or a blue print of what an object will be (blueprint for instance of the class which is an object)

const andres = new Employee ('Andres1', 9423, 'borja98loc@gmail.com', 'Employee');



console.log(andres.getName());
console.log(andres.getId());
console.log(andres.getEmail());
console.log(andres.getRole());

module.exports = Employee;



