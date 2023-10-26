const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUp, (req, res) => {
  return res.status(201).json({ redirect: '/' });
});

router.post('/login', userController.login, (req, res) => {
  if (res.locals.loggedIn)
    return res.status(200).json({ redirect: '/GameContainer' });
  else
    return res.status(401).json({ redirect: '/' });
});

module.exports = router;
