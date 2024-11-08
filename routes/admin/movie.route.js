const MovieController = require("../../controllers/admin/Movie.controller");
const express = require("express");
const Router = express.Router();


Router.get("/create", MovieController.create);
Router.get("/edit/:id", MovieController.edit);
Router.get("/", MovieController.index)



module.exports = Router