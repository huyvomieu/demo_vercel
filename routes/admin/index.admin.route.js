
const page = require('./page.route');
const movie = require('./movie.route');

module.exports = (app) => {
    app.use("/admin/movie", movie)
    app.use("/admin", page)
}