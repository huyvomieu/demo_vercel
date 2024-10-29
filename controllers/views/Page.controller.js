const Movie = require("../../models/Movie.model")
const Banner = require("../../models/Banner.model")
const md5 = require("md5")
class PageController {
    // [GET] /
    async homePage(req, res, err) {
        const banners = await Banner.find({});
        const movies = await Movie.find({});
        // res.json(banners)
        res.render("pages/homePage",
            {
                banners: banners,
                movies: movies,
            }
        );
    }

}
module.exports = new PageController