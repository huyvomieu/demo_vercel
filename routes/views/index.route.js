const movie = require('./movie.route')
const user = require('./user.route')
const page = require('./page.route')

const userMiddleware = require('../../middlewares/user.middleware')
module.exports = (app) => {
    app.use(userMiddleware);
    app.use("/movie", movie)
    app.use("/user", user)
    app.use("/", page)
}