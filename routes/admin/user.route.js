const UserController = require("../../controllers/admin/User.controller");
const express = require("express");
const Router = express.Router();


Router.get("/create", UserController.create);
Router.get("/edit/:id", UserController.edit);
Router.patch("/edit/:id", UserController.editPatch);
Router.get("/reset/:id", UserController.resetPass);
Router.delete("/delete/:id", UserController.delete);
Router.get("/", UserController.index)



module.exports = Router