const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname,"\output")

const render = employees => {
    const html = [];

html.push( employees 
    .filter(employee => employee.getRole() === "manager")
    .map(manager => renderManager(manager))
);
html.push( employees 
    .filter(employee => employee.getRole() === "engineer")
    .map(engineer => renderEngineer(engineer))
);
html.push( employees 
    .filter(employee => employee.getRole() === "intern")
    .map(intern => renderIntern(intern))
);

return renderMain(html.join(""));

}
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir,"engineer.html"), "utf8");
    template = replacePlaceholders(template, "name", engineer.getname());
    template = replacePlaceholders(template, "role", engineer.getRole());
    template = replacePlaceholders(template, "email", engineer.getemail());
    template = replacePlaceholders(template, "id", engineer.getid());
    template = replacePlaceholders(template, "school", engineer.getschool());
 return template
}
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir,"manager.html"), "utf8");
    template = replacePlaceholders(template, "name", manager.getname());
    template = replacePlaceholders(template, "role", manager.getRole());
    template = replacePlaceholders(template, "email", manager.getemail());
    template = replacePlaceholders(template, "id", manager.getid());
    template = replacePlaceholders(template, "school", manager.getschool());
 return template
}
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir,"intern.html"), "utf8");
    template = replacePlaceholders(template, "name", intern.getname());
    template = replacePlaceholders(template, "role", intern.getRole());
    template = replacePlaceholders(template, "email", intern.getemail());
    template = replacePlaceholders(template, "id", intern.getid());
    template = replacePlaceholders(template, "school", intern.getschool());
 return template
}
const renderMain = html => {
    const template = fs.readFileSync(path.resolve(templatesDir,"team.html"), "utf8");
    return replacePlaceholders(template,"team",html);
}
const replacePlaceholders = (template, placeholder,value) => {
    const pattern = new RegExp("{{" + placeholder  + "}}", "gm");
    return template.replace(pattern,value);
}

module.exports = render;