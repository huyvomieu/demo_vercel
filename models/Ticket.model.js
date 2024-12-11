const mongoose = require('mongoose')

const Ticket = new mongoose.Schema(
    {
        id_movie: String,
        price: Number,
        quantity: Number,
        place: String,
        timestart: String,
        datestart: String,
        seats: {
            type: Array,
            default: []
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Ticket", Ticket)