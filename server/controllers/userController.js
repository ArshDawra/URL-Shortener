const users = require('../models/userModel');
const bcrypt = require('bcrypt');

// var session;
async function signUp(req, res) {
    try {
        let dataObj = req.body;
        let user = await users.create(dataObj);
        // session = req.session;
        // session.userEmail = req.body.userEmail;
        res.json({
            message: "User Signed Up",
            data: user
        });
        //redirect to dashboard
    }
    catch (err) {
        //redirect to signup page on any error
        res.json({
            message: err.message
        });
    }
}

async function logIn(req, res) {
    try {
        let userEmail = req.body.userEmail;
        let password = req.body.password;
        let user = await users.findOne({ userEmail: userEmail });
        if (user) {
            let hashedPassword = user.password;
            let flag = bcrypt.compare(password, hashedPassword);
            if (flag) {
                // session = req.session;
                // session.userEmail = req.body.userEmail;
                // console.log(session.userEmail)
                return res.json({
                    message: "User logged In",
                    data: user
                });
            }
            else {
                return res.json({
                    message: "Wrong Credentials"
                })
            }
        }
        else {
            return res.json({
                message: "User Not Found"
            })
        }
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

async function logOut(req, res) {
    try {
        req.session.destroy();
        await res.json({
            message: "Logged Out!"
        });
        //render login page
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

module.exports = {
    signUp,
    logIn,
    logOut
}