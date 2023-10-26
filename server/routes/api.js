const express = require('express');
const router  = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signUp, (req, res) => {
  return res.status(201).json({ redirect: '/' });
});

});

module.exports = router;
