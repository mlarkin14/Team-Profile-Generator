const EmployeeProfile = require('../src/EmployeeProfile');
const Employee = require('../lib/Employee');

test("creates an EmployeeProfile object", () => {
    const employee = new Employee('Matthew', '6', 'me@you.com');
    const employeeProfile = new EmployeeProfile(employee);
    expect(employeeProfile).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Employee',
        html: ''
    });
});

test("sets EmployeeProfile html", () => {
    const employee = new Employee('Matthew', '6', 'me@you.com');
    const employeeProfile = new EmployeeProfile(employee);
    employeeProfile.setProfile();
    expect(employeeProfile.html).toEqual(expect.stringContaining(employeeProfile.html.toString()));
});
test("create EmployeeProfile html", () => {
    const employee = new Employee('Matthew', '6', 'me@you.com');
    const employeeProfile = new EmployeeProfile(employee);
    expect(employeeProfile.createProfile()).toEqual(expect.stringContaining(employeeProfile.html.toString()));
});