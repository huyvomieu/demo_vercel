const movie = require('./movie.route')
const user = require('./user.route')
const page = require('./page.route')
const order = require('./order.route')
const ticket = require('./ticket.route')

const userMiddleware = require('../../middlewares/user.middleware')
module.exports = (app) => {
    app.use(userMiddleware);
    app.use("/movie", movie)
    app.use("/user", user)
    app.use("/order", order)
    app.use("/ticket", ticket)
    app.use("/", page)
}