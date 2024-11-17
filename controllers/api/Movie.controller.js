const Movie = require("../../models/Movie.model")

class MovieController {
    // [GET] /api/v1/movie/index
    async index(req, res, err) {
        console.log(req.query.q)
        let find = {
            name: new RegExp(req.query.q, "i")
        }
        const movies = await Movie.find(find).limit(5)
        res.json(movies);
    }
    // [GET] /api/v1/movie/detail/:id
    async detail(req, res, err) {
        try {
            const id = req.params.id;
            const movie = await Movie.findOne({ _id: id });
            res.json(movie);
        } catch (error) {
            res.json({
                code: 400,
                message: "Không tồn tại!" + error,
            })
        }

    }
    // [POST] /api/v1/movie/add
    async add(req, res, err) {
        try {
            const movie = new Movie(req.body);
            await movie.save();
            res.json({
                code: 200,
                message: "Thêm phim thành công!",

            })
        } catch (err) {
            res.json({
                code: 400,
                message: "Không tồn tại!" + err,
            })
        }

    }
    // [PATCH] /api/v1/movie/change-movie/:id
    async change(req, res, err) {
        try {
            const id = req.params.id;
            const field = req.body;
            const movie = await Movie.updateOne(
                { _id: id },
                {
                    $set: field
                }
            );
            res.json(
                {
                    code: 200,
                    message: "Cập nhật phim thành công",
                }
            );
        } catch (error) {
            res.json({
                code: 400,
                message: "Không tồn tại!" + error,
            })
        }
    }
    // [PATCH] /api/v1/movie/change-multi/
    async change_multi(req, res, err) {
        try {
        } catch (error) {
            res.json({
                code: 400,
                message: "Không tồn tại!" + error,
            })
        }
    }
    // [DELETE] /api/v1/movie/delete/:id
    async delete(req, res, err) {
        try {
            const id = req.params.id;
            const movie = await Movie.deleteOne({ _id: id }
            );
            res.json(
                {
                    code: 200,
                    message: "Xóa phim phim thành công",
                }
            );
        } catch (error) {
            res.json({
                code: 400,
                message: "Lỗi hệ thống!" + error,
            })
        }
    }
}

module.exports = new MovieController