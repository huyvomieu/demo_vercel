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
            type: Number,    // 0 la dang xu ly  // 1 da thanh toan // -1 đã hủy hoặc hết thời hạn
            default: 0
        },
        expireAt: { type: Date }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Order", Order)