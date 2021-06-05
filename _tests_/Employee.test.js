const Employee = require("../lib/Employee");

test("Is an Employee object created?", () => {
  const employee = new Employee();
  expect(employee);
});

test("Can Employee name be set?", () => {
  const employeeName = "Justin Walker";
  const employee = new Employee(employeeName);
  expect(employee.employeeName).toBe(employeeName);
});

test("Can Employee ID be set?", () => {
  const id = "123456789";
  const employee = new Employee("Justin Walker", id);
  expect(employee.id).toBe(id);
});

test("Can Employee email be set?", () => {
  const email = "justin.walker@email.com";
  const employee = new Employee("Justin Walker", "123456789", email);
  expect(employee.email).toBe(email);
});

test("Does getName() return the employee's name?", () => {
  const employee = new Employee(
    "Justin Walker",
    "123456789",
    "justin.walker@email.com"
  );
  expect(employee.getName()).toBe("Justin Walker");
});

test("Does getId() return the employee's ID?", () => {
  const employee = new Employee(
    "Justin Walker",
    "123456789",
    "justin.walker@email.com"
  );
  expect(employee.getId()).toBe("123456789");
});

test("Does getEmail() the employee's email?", () => {
  const employee = new Employee(
    "Justin Walker",
    "123456789",
    "justin.walker@email.com"
  );
  expect(employee.getEmail()).toBe("justin.walker@email.com");
});

test("Does getRole() return the employee's role?", () => {
  const employee = new Employee(
    "Justin Walker",
    "123456789",
    "justin.walker@email.com"
  );
  expect(employee.getRole()).toBe("Employee");
});
