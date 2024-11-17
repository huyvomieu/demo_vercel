
const page = require('./page.route');
const movie = require('./movie.route');
const user = require('./user.route');

module.exports = (app) => {
    app.use("/admin/movie", movie)
    app.use("/admin/user", user)
    app.use("/admin", page)
}