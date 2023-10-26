const bcrypt = require ('bcrypt');
const User = require('../models/userModel');

module.exports = {
  signUp: async (req, res, next) => {
    console.log(req.params)
    try {
      const { username, password } = req.body;
      console.log('Creating user...');
      bcrypt.hash(password, 10, async (err, hash) => {
        if (err){
          console.error('Error hashing password', err);
          return next(err)
        }
        const newUser = new User({ username, password: hash });
        try {
          await newUser.save()
          console.log('New user Created', { username, password });
          res.locals.newUser = newUser;
          return next();      
        } catch (saveError) {
          console.error('Error saving user', saveError);
          return next(saveError) 
        }
      });
    } catch (err) {
      console.error('Error creating user', err)
      return next(err);
    }
  },
      
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username }).exec();
      res.locals.loggedIn = false;
      if (user) {
        res.locals.loggedIn = await bcrypt.compare(password, user.password);
      }
      return next();
    }
    catch (err) {
      return next(err);
      // res.status(500).json({ message: 'Server side error during login' });
    }
  },
};
