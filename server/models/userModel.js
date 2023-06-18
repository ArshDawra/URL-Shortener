const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true,
        unique: true,
        // validate: function () {
        //     return emailValidator.validate(this.userEmail);
        // }
    },
    password: {
        type: String,
        required: true,
    }
});

const users = mongoose.model('users', userSchema);
module.exports = users;