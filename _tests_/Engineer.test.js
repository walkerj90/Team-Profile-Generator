const Engineer = require("../lib/Engineer");

test("Is an Engineer object created?", () => {
  const engineer = new Engineer();
  expect(engineer);
});

test("Can Engineer name be set?", () => {
  const employeeName = "Fake Fakeman";
  const engineer = new Engineer(employeeName);
  expect(engineer.employeeName).toBe(employeeName);
});

test("Can Engineer ID be set?", () => {
  const id = "789456123";
  const engineer = new Engineer("Fake Fakeman", id);
  expect(engineer.id).toBe(id);
});

test("Can Engineer email be set?", () => {
  const email = "fake@email.com";
  const engineer = new Engineer("Fake Fakeman", "789456123", email);
  expect(engineer.email).toBe(email);
});

test("Does getName() return the engineer's name?", () => {
  const engineer = new Engineer("Fake Fakeman", "789456123", "fake@email.com");
  expect(engineer.getName()).toBe("Fake Fakeman");
});

test("Does getId() return the engineer's ID?", () => {
  const engineer = new Engineer("Fake Fakeman", "789456123", "fake@email.com");
  expect(engineer.getId()).toBe("789456123");
});

test("Does getEmail() the engineer's email?", () => {
  const engineer = new Engineer("Fake Fakeman", "789456123", "fake@email.com");
  expect(engineer.getEmail()).toBe("fake@email.com");
});

test("Does getRole() return the engineer's role?", () => {
  const engineer = new Engineer("Fake Fakeman", "789456123", "fake@email.com");
  expect(engineer.getRole()).toBe("Engineer");
});

test("Does getGithub() return the engineer's GitHub username?", () => {
  const engineer = new Engineer(
    "Fake Fakeman",
    "789456123",
    "fake@email.com",
    "fakeGit"
  );
  expect(engineer.getGithub()).toBe("fakeGit");
});
