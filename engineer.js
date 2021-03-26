const worker = require("./worker");
class Engineer extends worker {
    constructor(name,email,id,github){
        super(name,id,email);
        this.github = github;
    }
    getRole(){
        return "engineer";
    }
    getGithub(){
        return this.github;
    }
}
module.exports = Engineer
