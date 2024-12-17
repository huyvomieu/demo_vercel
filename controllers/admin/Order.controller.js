const Order = require("../../models/Order.model")
const User = require("../../models/User.model")
const Movie = require("../../models/Movie.model")
class OrderController {
    // [GET] /admin/order
    async index(req, res, err) {
        const records = await Order.find({});
        for await (const record of records) {
            const user = await User.findOne({_id: record.user_id})
            const movie = await Movie.findOne({_id: record.movie_id})
            record.user_name = user.firstname + " " + user.lastname;
            record.movie_name = movie.name;
            record.quantity = record.seats.split(', ').length

        }
        res.render("admin/order/list",
            {
                title: "Order",
                TitlePage: "Order",
                records: records,

            }
        );
    }
    // [GET] /admin/order/changeStatus/:id
    async changeStatus(req, res, err) {
        let id = req.params.id;
        const record = await Order.findOne({_id: id});
        console.log(record.status)
        record.status = (record.status == 0) ? 1 : 0;
        await record.save();
        res.redirect('back')
    }
}
module.exports = new OrderController()