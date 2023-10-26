const request = require('supertest');
const server = 'http://localhost:3000';
  
describe('Route integration testing', () => {
    it('should respond with status 200 in /SignUpForm', async () => {
      const response = await request(server)
        .post('/SignUpForm')
        .send({ username: 'testUser', password: 'testpass' });

      expect(response.status).toEqual(200);
      expect(response.body.redirect).toEqual('/');
    });
});
