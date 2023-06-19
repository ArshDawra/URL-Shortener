const express = require('express');
const { generateShortURL, redirectURL, searchURL } = require('../controllers/urlController');
const router = express.Router();

router.post('/shorten', generateShortURL);
router.get('/:shortID', redirectURL);

module.exports = router;