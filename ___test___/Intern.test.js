const Intern = require('../lib/Intern');

test("create Intern object", () => {
    const intern = new Intern('Matthew', '6', 'me@you.com', 'Rutgers');
    expect(intern).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Intern',
        school: 'Rutgers'
    });
});
test("gets Inters's role", () => {
    const intern = new Intern('Matthew', '6', 'me@you.com', 'Rutgers');
    expect(intern.getRole()).toEqual(expect.stringContaining(intern.role.toString()));
});
test("gets Intern's school", () => {
    const intern = new Intern('Matthew', '6', 'me@you.com', 'Rutgers');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});