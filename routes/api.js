const express = require('express');
const router = express.Router();
const userController = require('./userController')

router.get('/')

router.get('/login', userController.login, (req, res) => {
    res.status(200).json();
})

router.post('/SignUpForm', userController.signUp, (req, res) => {
    console.log('signedup!')
    res.status(200).json(res.locals.newUser)
})

module.exports = router;