// This file is related to the class of interns here goes all the information that they are going to provide to us
//Lets create a constructor for engineer
class Intern {
    constructor(school){
        this.school = school;
    }
    getSchool (school){
        this.school += school ;
        this.roles.push(school);
        console.log(`Person with ${school}`);
    }
    getRole (role){
        this.role += intern ;
        this.roles.push(role);
        console.log(`Person with ${role}`);
    }
}
//Before anything lets export the class

module.exports = Intern;