const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


// router.post('/SignUpForm', userController.signUp, (req, res) => {
//   // console.log('signedup!')
//   res.sendStatus(200)
// })

router.post('/SignUpForm', (req, res) => {
  // console.log('signedup!')
  res.sendStatus(200)
})

// router.post('/', userController.login, (req, res) => {
//   //redirect to home page
//   // console.log('Login successful!')
//   // res.redirect('/hi')
//   res.status(200).json({ redirect: '/GameContainer'})
// })


module.exports = router;