const mongoose = require('mongoose')

const Order = new mongoose.Schema(
    {
        order_id: String,
        user_id: String,
        movie_id: String,
        ticket_id: String,
        price: Number,
        total: Number,
        seats: String,
        place: String,
        time: String,
        status: {
            type: Number,    // 0 la dang xu ly  // 1 da thanh toan
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Order", Order)