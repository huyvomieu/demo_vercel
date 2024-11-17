const Movie = require("../../models/Movie.model")
class MovieController {
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
    // [POST] /admin/movie/create
    async createPost(req, res, err) {
        const movie = new Movie(req.body);
        await movie.save();
        req.flash("success", "Thêm phim thành công")
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
        const record = await Movie.findOne({ _id: id })
        res.render("admin/movie/edit",
            {
                title: "Movie",
                TitlePage: "Movie",
                record: record
            }
        );
    }
    // [PATCH] /admin/movie/edit/:id
    async editPatch(req, res, err) {
        let id = req.params.id;
        await Movie.findOneAndUpdate({ _id: id }, req.body)
        req.flash("success", "Cập nhật phim thành công")
        res.redirect("back")
    }
    // [DELETE] /admin/movie/delete/:id
    async deleteOne(req, res, err) {
        let id = req.params.id;
        await Movie.findOneAndDelete({ _id: id })
        req.flash("success", "Xóa phim thành công")
        res.redirect("back")
    }

}
module.exports = new MovieController()