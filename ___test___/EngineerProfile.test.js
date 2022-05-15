const EngineerProfile = require('../src/EngineerProfile');
const Engineer = require('../lib/Engineer');

test("create EngineerProfile object", () => {
    const engineer = new Engineer('Matthew', '6', 'me@you.com', 'mlarkin14');
    const engineerProfile = new EngineerProfile(engineer);
    expect(engineerProfile).toEqual({
        name: 'Matthew',
        id: '6',
        email: 'me@you.com',
        role: 'Engineer',
        github: 'mlarkin14',
        html: expect.any(String)
    });

});