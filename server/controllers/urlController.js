const shortid = require('shortid');
const URL = require('../models/urlModel');

async function generateShortURL(req, res) {
    if (!req.body.originalURL) return res.status(400).json({ error: 'URL is required' });
    const originalURL = req.body.originalURL;
    const notes = req.body.notes;
    try {
        const shortURL = shortid.generate();
        await URL.create({ shortURL, originalURL, notes });
        res.json({ data: shortURL });
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function redirectURL(req, res) {
    const shortURL = req.params.shortURL;
    try {
        const url = await URL.findOne({ shortURL });
        if (url) {
            res.redirect(url.originalURL);
        }
        else {
            res.status(404).json({ error: "URL not found" });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
}

async function searchURL(req, res) {
    try {
        let result = await collection.aggregate([{

        }])
    }
    catch (err) {
        res.json({
            message: err.message
        });
    }
}

module.exports = { generateShortURL, redirectURL, searchURL };
