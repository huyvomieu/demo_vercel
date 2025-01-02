const Movie = require("../../models/Movie.model");

class MovieController {
    // [GET] /api/v1/movie/index
    //Search film
    async index(req, res, err) {
        console.log(req.query.q);
        let find = {
            name: new RegExp(req.query.q, "i"),
        };
        const movies = await Movie.find(find).limit(5);
        res.json(movies);
    }
}

module.exports = new MovieController();
