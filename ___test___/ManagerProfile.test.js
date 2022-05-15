const ManagerProfile = require('../src/ManagerProfile');
const Manager = require('../lib/Manager');

test("creates a ManagerProfile object", () => {
    const manager = new Manager('Matthew', '6', 'me@you.com', '1234567891');
    const managerProfile = new ManagerProfile(manager);
    expect(managerProfile).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Manager',
        officeNumber: '1234567891',
        html: expect.any(String)
    });
});