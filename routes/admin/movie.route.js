const MovieController = require("../../controllers/admin/Movie.controller");
const express = require("express");
const Router = express.Router();


Router.get("/create", MovieController.create);
Router.post("/create", MovieController.createPost);
Router.get("/edit/:id", MovieController.edit);
Router.patch("/edit/:id", MovieController.editPatch);
Router.delete("/delete/:id", MovieController.deleteOne);
Router.get("/", MovieController.index)



module.exports = Router