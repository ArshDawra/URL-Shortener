const users = require('../models/userModel');
const bcrypt = require('bcrypt');

// var session;
async function signUp(req, res) {
    try {
        let dataObj = req.body;
        console.log(dataObj.userName);
        console.log(dataObj);
        if (dataObj.password == dataObj.confirmPassword) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(dataObj.password, salt);
            const user = new users({
                userName: dataObj.userName,
                userEmail: dataObj.userEmail,
                password: hashedPassword
            })
            await user.save();
            console.log(user);
            // session = req.session;
            // session.userEmail = req.body.userEmail;
            res.send({
                message: "User Signed Up",
                data: user
            });
            console.log("User created!");
        }
        //redirect to dashboard
        else {
            res.send({
                message: "Passwords donot match"
            });
            console.log("don't match");
        }
    }
    catch (err) {
        //redirect to signup page on any error
        res.send({
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
            console.log(user);
            if (flag) {
                // session = req.session;
                // session.userEmail = req.body.userEmail;
                // console.log(session.userEmail)
                console.log("heyeyeye");
                return res.send({
                    message: "User logged In",
                    data: user
                });
            }
            else {
                return res.send({
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
        res.send({
            message: err.message
        });
    }
}

async function logOut(req, res) {
    try {
        req.session.destroy();
        await res.send({
            message: "Logged Out!"
        });
        //render login page
    }
    catch (err) {
        res.send({
            message: err.message
        });
    }
}

module.exports = {
    signUp,
    logIn,
    logOut
}