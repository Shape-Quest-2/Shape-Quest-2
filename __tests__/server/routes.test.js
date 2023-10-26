const request = require('supertest');
const express = require('express')
const app = express()
const router = require('../../server/routes/api.js')
const server = require('../../server/server.js');


app.use('/', router)
afterAll((done) => {
    // Close the server to prevent open handles
    server.close((err) => {
      if (err) {
        console.error('Error closing the server:', err);
      } else {
        console.log('Server closed.');
      }
      done();
    });
  });
describe('Route integration testing', () => {
    it('should respond with status 200 in /SignUpForm', async () => {
        const response = await request(app)
        .post('/SignUpForm')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify({ username: 'testUser', password: 'testpass' }));

        expect(response.status).toEqual(200);
        // expect(response.body).toEqual("username")

    })
});
