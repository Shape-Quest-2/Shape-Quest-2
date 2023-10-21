const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, requires: true},
    password: {type: String, require: true},
    progression: {type: Number}
})

const User = mongoose.model('User', userSchema);

module.exports = User;