const mongoose = require('mongoose')

const generateStringRandom = require("../helper/generateStringRandom")

const User = new mongoose.Schema(
    {
        fullname: String,
        username: String,
        email: String,
        password: String,
        tokenUser: {
            type: String,
            default: generateStringRandom.generateStringToken(30),
        },
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", User)