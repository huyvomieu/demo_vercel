const MovieController = require("../../controllers/views/Movie.controller");
const express = require("express");
const Router = express.Router();

Router.get("/index", MovieController.index)
Router.get("/detail/:id", MovieController.detail)
Router.post("/add", MovieController.add)
Router.patch("/change-movie/:id", MovieController.change)
Router.delete("/delete/:id", MovieController.delete)

module.exports = Router