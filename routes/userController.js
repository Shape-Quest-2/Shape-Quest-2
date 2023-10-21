//const User = require('../server')
const userController = {};
const mongoose = require('mongoose');
const User = require('../userModel')



userController.login = async (req, res, next) => {
    
}

userController.signUp = async (req, res, next) => {
    console.log(req.params)
    try {
        const { username, password } = req.body

        console.log('creating user')
        const newUser = new User({username, password});
        newUser.save(); 
        res.locals.newUser = newUser
        console.log('created newUser', {username, password})
        return next()
    } catch (err){
        return next(err)

    }
}

userController.login = async (req, res, next) => {
    console.log('logging in')
    try {
        console.log('reqbody in usercontroller.login', req.body)
        const { username, password } = req.body

        const activeUser = await User.findOne({username, password})

        if (activeUser){
            console.log('Active user found')
            return res.redirect('http://localhost:8080/')
            // return next()
        } else {
            return console.log("Error logging in")
            
        }
    } catch (err) {
        console.log("Error logging in", err)
    }
}
// userController.signUp = (req, res,next) => {
//     console.log(req.body);
//     const { userName, password } = req.body;
//     User.create({ userName: userName, password: password })
//         .then((data) => {
//             console.log(data);
//             return next()
//     })
// }
module.exports = userController