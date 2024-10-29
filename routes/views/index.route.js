const movie = require('./movie.route')
const user = require('./user.route')
const page = require('./page.route')


module.exports = (app) => {
    app.use("/movie", movie)
    app.use("/user", user)
    app.use("/", page)
}