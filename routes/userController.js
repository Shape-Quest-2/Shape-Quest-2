
const userController = {};

userController.login = async (req, res, next) => {
    
}

userController.signUp = async (req, res, next) => {
    const { userName, password } = req.body
    try {
        console.log('creating user')
        const newUser = await User.create({userName, password});
         
        res.locals.newUser = newUser
        console.log('created newUser')
        return next()
    } catch (err){
        return next(err)

    }
}
module.exports = userController