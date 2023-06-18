const express = require('express');
const router = express.Router();
const { logIn, signUp, logOut } = require('../controllers/userController')

router.post('/login', logIn);
router.post('/signUp', signUp);
router.delete('/logout', logOut)

module.exports = router;