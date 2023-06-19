const express = require('express');
const { searchURL } = require('../controllers/urlController');
const router = express.Router();

router.get('/searchURL/:keyword', searchURL);

module.exports = router;