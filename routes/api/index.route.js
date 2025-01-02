const movie = require("./movie.route");
const user = require("./user.route");
const banner = require("./banner.route");
const ticket = require("./ticket.route");

module.exports = (app) => {
    app.use("/api/v1/movie", movie);
    // app.use("/api/v1/user", user)
    app.use("/api/v1/banner", banner);
    app.use("/api/v1/ticket", ticket);
};
