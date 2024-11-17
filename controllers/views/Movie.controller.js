const Movie = require("../../models/Movie.model")

class MovieController {
    // [GET] /movie/
    async index(req, res, err) {
        const records = await Movie.find({}).limit(16);
        const arrMovies = [];
        for (let i = 0; i < records.length; i += 4) {
            arrMovies.push(records.slice(i, i + 4));
        }
        // res.json(arrMovies)
        res.render("client/movie/index",
            {
                title: "List Movie",
                movies: arrMovies
            }
        )
    }
    // [GET] /movie/comingsoon
    async comingsoon(req, res, err) {
        const records = await Movie.find({}).limit(16);
        const arrMovies = [];
        for (let i = 0; i < records.length; i += 4) {
            arrMovies.push(records.slice(i, i + 4));
        }
        // res.json(arrMovies)
        res.render("client/movie/comingsoon",
            {
                title: "List ComingSoon Movie",
                movies: arrMovies
            }
        )
    }
}

module.exports = new MovieController