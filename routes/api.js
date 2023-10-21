const express = require('express');
const router = express.Router();
const userController = require('./userController')


router.post('/SignUpForm', userController.signUp, (req, res) => {
    console.log('signedup!')
    return res.redirect('/')
    console.log('redirecting')

})

router.post('/', userController.login, (req, res) => {
    //redirect to home page
    console.log('Login successful!')
    res.redirect('/hi')
})



module.exports = router;