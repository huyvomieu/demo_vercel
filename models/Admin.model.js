const mongoose = require('mongoose')

const generateStringRandom = require("../helper/generateStringRandom")

const Admin = new mongoose.Schema(
    {
        email: String,
        username: String,
        password: String,
        avatar: String,
        tokenAdmin: {
            type: String,
            default: generateStringRandom.generateStringToken(30),
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Admin", Admin)