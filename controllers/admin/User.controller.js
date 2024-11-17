const User = require("../../models/User.model")
class UserController {
    // [GET] /admin/movie
    async index(req, res, err) {
        const users = await User.find({});
        res.render("admin/user/index",
            {
                title: "Customer",
                TitlePage: "Customer",
                users: users,

            }
        );
    }
    // [GET] /admin/movie/create
    async create(req, res, err) {
        res.render("admin/movie/create",
            {
                title: "Movie",
                TitlePage: "Movie",

            }
        );
    }
    // [GET] /admin/movie/:id
    async edit(req, res, err) {
        let id = req.params.id;
        const record = await Movie.findOne({})
        res.render("admin/movie/edit",
            {
                title: "Movie",
                TitlePage: "Movie",
                record: record
            }
        );
    }

}
module.exports = new UserController