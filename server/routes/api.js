const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController');

router.post('/SignUpForm', userController.signUp, (req, res) => {
  res.status(201).json({ message: 'Signed in succesfully!', redirect: '/' });
})

router.post('/', userController.login, (req, res) => {
  res.status(200).json({ message: 'Login successful', redirect: '/GameContainer'})
})

module.exports = router;
