const Manager = require("../lib/Manager");

test("Is a Manager object created?", () => {
  const manager = new Manager();
  expect(manager);
});

test("Can Manager name be set?", () => {
  const employeeName = "Blake Blakeman";
  const manager = new Manager(employeeName);
  expect(manager.employeeName).toBe(employeeName);
});

test("Can Manager ID be set?", () => {
  const id = "951753456";
  const manager = new Manager("Blake Blakeman", id);
  expect(manager.id).toBe(id);
});

test("Can Manager email be set?", () => {
  const email = "blake@email.com";
  const manager = new Manager("Blake Blakeman", "951753456", email);
  expect(manager.email).toBe(email);
});

test("Does getName() return the manager's name?", () => {
  const manager = new Manager("Blake Blakeman", "951753456", "blake@email.com");
  expect(manager.getName()).toBe("Blake Blakeman");
});

test("Does getId() return the manager's ID?", () => {
  const manager = new Manager("Blake Blakeman", "951753456", "blake@email.com");
  expect(manager.getId()).toBe("951753456");
});

test("Does getEmail() the manager's email?", () => {
  const manager = new Manager("Blake Blakeman", "951753456", "blake@email.com");
  expect(manager.getEmail()).toBe("blake@email.com");
});

test("Does getRole() return the manager's role?", () => {
  const manager = new Manager("Blake Blakeman", "951753456", "blake@email.com");
  expect(manager.getRole()).toBe("Manager");
});
