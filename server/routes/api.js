const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController');

router.post('/SignUpForm', userController.signUp, (req, res) => {
  return res.status(201).json({ redirect: '/' });
})

router.post('/', userController.login, (req, res) => {
  return res.status(200).json({ redirect: '/GameContainer' })
})

module.exports = router;
