const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// router.get('/', (req, res) => {
//   res.status(200)
// })

router.post('/SignUpForm', userController.signUp, (req, res) => {
  console.log('signedup!')
  res.status(201).json({ message: 'Signed in succesfully!', redirect: '/' });
  console.log('redirecting')
})

router.post('/', userController.login, (req, res) => {
  //redirect to home page
  // console.log('Login successful!')
  // res.redirect('/hi')
  res.status(200).json({ message: 'Login successful', redirect: '/GameContainer'})
})


module.exports = router;