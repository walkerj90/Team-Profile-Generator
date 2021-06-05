const Intern = require("../lib/Intern");

test("Is an Intern object created?", () => {
  const intern = new Intern();
  expect(intern);
});

test("Can Intern name be set?", () => {
  const employeeName = "Jake Jakeman";
  const intern = new Intern(employeeName);
  expect(intern.employeeName).toBe(employeeName);
});

test("Can Intern ID be set?", () => {
  const id = "654987321";
  const intern = new Intern("Jake Jakeman", id);
  expect(intern.id).toBe(id);
});

test("Can Intern email be set?", () => {
  const email = "jake@email.com";
  const intern = new Intern("Jake Jakeman", "654987321", email);
  expect(intern.email).toBe(email);
});

test("Does getName() return the intern's name?", () => {
  const intern = new Intern("Jake Jakeman", "654987321", "jake@email.com");
  expect(intern.getName()).toBe("Jake Jakeman");
});

test("Does getId() return the intern's ID?", () => {
  const intern = new Intern("Jake Jakeman", "654987321", "jake@email.com");
  expect(intern.getId()).toBe("654987321");
});

test("Does getEmail() the intern's email?", () => {
  const intern = new Intern("Jake Jakeman", "654987321", "jake@email.com");
  expect(intern.getEmail()).toBe("jake@email.com");
});

test("Does getRole() return the intern's role?", () => {
  const intern = new Intern("Jake Jakeman", "654987321", "jake@email.com");
  expect(intern.getRole()).toBe("Intern");
});

test("Does getSchool() return the intern's school?", () => {
  const intern = new Intern(
    "Jake Jakeman",
    "654987321",
    "jake@email.com",
    "School Univ"
  );
  expect(intern.getSchool()).toBe("School Univ");
});
