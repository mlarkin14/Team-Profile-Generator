const Manager = require('../lib/Manager');

test('create a Manager object', () => {
    const manager = new Manager('Matthew', '6', 'me@you.com', '1234567891');
    expect(manager).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Manager',
        officeNumber: '1234567891'
    });
});
test("gets Manager's role", () => {
    const manager = new Manager('Matthew', '6', 'me@you.com', '1234567891');
    expect(manager.getRole()).toEqual(expect.stringContaining(manager.role.toString()));
});
test("gets Managers's office number", () => {
    const manager = new Manager('Matthew', '6', 'me@you.com', '1234567891');
    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining(manager.officeNumber.toString()));
});