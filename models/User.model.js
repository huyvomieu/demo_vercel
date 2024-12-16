const mongoose = require('mongoose')

const generateStringRandom = require("../helper/generateStringRandom")

const User = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
        username: String,
        phone: String,
        password: String,
        avatar: {
            type: String,
            default: "/image/homepage_img/user.png"
        },
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