const request = require('supertest');
const express = require('express')
const app = express()
const router = require('../../server/routes/api.js')


app.use('/', router)

describe('Route integration testing', () => {
    it('should respond with status 200 in /SignUpForm', async () => {
        const response = await request(app)
        .post('/SignUpForm')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify({ username: 'testUser', password: 'testpass' }));

        expect(response.status).toEqual(200);

    })
});
