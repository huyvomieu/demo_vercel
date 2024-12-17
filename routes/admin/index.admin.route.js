
const page = require('./page.route');
const movie = require('./movie.route');
const ticket = require('./ticket.route');
const user = require('./user.route');
const order = require('./order.route');

const authMiddleware = require('../../middlewares/auth.middleware')

module.exports = (app) => {
    app.use("/admin/ticket", authMiddleware, ticket)
    app.use("/admin/movie",authMiddleware, movie)
    app.use("/admin/user",authMiddleware, user)
    app.use("/admin/order",authMiddleware, order)
    app.use("/admin/", page)
}