const mongoose = require('mongoose')

const Movie = new mongoose.Schema(
    {
        name: String,
        description: String,
        category: String,
        avatar: String,
        duration: String,
        author: String,
        performer: String,
        date: String,
        StartDateAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Movie", Movie)