const MovieController = require("../../controllers/views/Movie.controller");
const express = require("express");
const Router = express.Router();

Router.get("/", MovieController.index)
Router.get("/:id", MovieController.detail)
Router.get("/comingsoon", MovieController.comingsoon)

module.exports = Router