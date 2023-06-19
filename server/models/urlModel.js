const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortURL: {
        type: String,
        required: true,
        unique: true,
    },
    originalURL: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    notes: {
        type: String
    },
    clicks: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model("URL", urlSchema);
