const worker = require("./worker");
class Intern extends worker {
    constructor(name,email,id,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "intern";
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Intern