const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Matthew', '6', 'me@you.com', 'mlarkin14');
    expect(engineer).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Engineer',
        github: 'mlarkin14'
    });
});
test("gets Engineer's github username", () => {
    const engineer = new Engineer('Matthew', '6', 'me@you.com', 'mlarkin14');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
test("gets Engineer's role", () => {
    const engineer = new Engineer('Matthew', '6', 'me@you.com', 'mlarkin14');
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});