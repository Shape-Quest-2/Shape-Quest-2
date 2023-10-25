//const User = require('../server')
const userController = {};
const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require ('bcrypt')


userController.signUp = async (req, res, next) => {
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
      console.log('encrypted password = ', hash)
      try {
        await newUser.save()
        console.log('New user Created', { username, password });
        res.locals.newUser = newUser;
    
      } catch (saveError) {
        console.error('Error saving user', saveError);
        return next(saveError) 
      }
    });
  } catch (err) {
    console.error('Error creating user', err)
    return next(err);
  }
}
    
userController.login = async (req, res, next) => {
  console.log('logging in');
  try {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username }).exec();
    
    if (!user) {
      console.log('User not found');
      res.status(400).json({ message: 'User not found' });
      return;
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (isPasswordValid) {
      console.log('Active user found');
      res.status(200).json({ message: 'Login successful', redirectTo: '/GameContainer' });
    } else {
      console.log('Incorrect password');
      res.status(400).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ message: 'Server side error during login' });
  }
}

module.exports = userController
