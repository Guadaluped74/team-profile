const engineer = require("../engineer")

text("can set github account via constructor", () => {
    const testvalue = "githubUser";
    const e = new engineer("foo", 1, "test@gmail.com", testvalue);
    expect(e.github).toBe(testvalue);
  
});
test("getRole() should return \"engineer\"",() =>{
const testvalue = "engineer"
const e = new engineer("foo", 1, "test@gmail.com", testvalue);
expect(e.getrole()).toBe(testvalue);

});

test("can get github username via getgithub()", () => {
    const testvalue = "githubuser"
    const e = new engineer("foo", 1, "test@gmail.com", testvalue);
    expect(e.getrole()).toBe(testvalue);
   });