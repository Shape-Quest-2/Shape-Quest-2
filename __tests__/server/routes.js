const request = require('supertest');
const express = require('express')
const app = express()
const router = require('../../server/routes/api.js')


app.use('/', router)

describe('Route integration testing', () => {
    it('should respond with status 200 and success message for /SignUpForm', async () => {
        const response = await request(app)
        .post('/SignUpForm')
        .send({username: 'testUser', password: 'testpass'});

        expect(response.status).toBe(500);

        expect(response.body).toEqual({
            message: 'Signed in successfully!',
            redirect: '/'
        })
    })
});
