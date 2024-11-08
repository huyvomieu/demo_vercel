const Movie = require("../../models/Movie.model")
class PageController {
    // [GET] /admin/movie
    async index(req, res, err) {
        const movies = await Movie.find({});
        res.render("admin/movie/index",
            {
                title: "Movie",
                TitlePage: "Movie",
                movies: movies,

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
module.exports = new PageController