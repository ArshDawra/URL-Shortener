const shortid = require('shortid');
const URL = require('../models/urlModel');

async function generateShortURL(req, res) {
    if (!req.body.originalURL) return res.status(400).json({ error: 'URL is required' });
    const originalURL = req.body.originalURL;
    const notes = req.body.notes;
    try {
        const shortID = shortid.generate();
        const shortURL = 'http://arshurl/' + shortID;
        await URL.create({ shortURL, originalURL, notes });
        res.send({ shortURL: shortURL });
        console.log(shortURL);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function redirectURL(req, res) {
    const shortID = req.params.shortID;
    const shortURL = "http://arshurl/" + shortID;
    //console.log(shortURL);
    try {
        const url = await URL.findOne({ shortURL });
        if (url) {
            //res.send({ originalURL: url.originalURL });
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

async function searchURL() { }

module.exports = { generateShortURL, redirectURL, searchURL };
