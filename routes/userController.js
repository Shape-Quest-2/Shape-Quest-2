//const User = require('../server')
const userController = {};
const mongoose = require('mongoose');
const User = require('../userModel')



userController.login = async (req, res, next) => {
    
}

userController.signUp = async (req, res, next) => {
    console.log(req.body)
    try {
        const { userName, password } = req.body

        console.log('creating user')
        const newUser = new User({userName, password});
        newUser.save(); 
        res.locals.newUser = newUser
        console.log('created newUser', newUser)
        return next()
    } catch (err){
        return next(err)

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