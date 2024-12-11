const mongoose = require('mongoose')

const Order = new mongoose.Schema(
    {
        order_id: String,
        user_id: String,
        movie_id: String,
        price: Number,
        total: Number,
        seats: String,
        place: String,
        time: String,
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Order", Order)