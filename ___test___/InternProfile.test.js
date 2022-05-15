const InternProfile = require('../src/InternProfile');
const Intern = require('../lib/Intern');

test("create InternProfile object", () => {
    const intern = new Intern('Matthew', '6', 'me@you.com', 'Rutgers');
    const internProfile = new InternProfile(intern);
    expect(internProfile).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Intern',
        school: 'Rutgers',
        html: expect.any(String)
    });

});