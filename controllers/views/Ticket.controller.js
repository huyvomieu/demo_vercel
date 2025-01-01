const Movie = require("../../models/Movie.model")
const Order = require("../../models/Order.model")

class TicketController {
    // [GET] /ticket/
    async index(req, res, err) {
        const UserInfo = res.locals.UserInfor;
        if(!UserInfo) {
            res.redirect('/user/login');
            return;
        }
        // UserInfo.id là id người dùng
        const records = await Order.find({user_id:UserInfo.id });
        for await (const record of records) {
            record.MovieInfo = await Movie.findOne({_id: record.movie_id})
        }

        res.render("client/ticket/detail",
            {
                title: "My ticket",
                records: records
            })
    }

}

module.exports = new TicketController