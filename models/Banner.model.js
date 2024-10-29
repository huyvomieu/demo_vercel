const mongoose = require('mongoose')

const Banner = new mongoose.Schema(
    {
        title: String,
        details: String,
        category: String,
        img: String,
        duration: String,
        point: String,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Banner", Banner)