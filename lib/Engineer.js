// This file is related to the class of engineers here goes all the information that they are going to provide to us


//Lets create a constructor for engineer
class Engineer {
    constructor(username){
        this.github = username;
    }
    getGithub (github){
        this.github += github ;
        this.github.push(github);
        console.log(`Person with ${github}`);
    }
    getRole (role){
        this.role += engineer ;
        this.roles.push(role);
        console.log(`Person with ${role}`);
    }
}

//Before anything lets export the class

module.exports = Engineer;
