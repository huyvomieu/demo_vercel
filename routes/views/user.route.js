const UserController = require("../../controllers/views/User.controller");
const express = require("express");
const Router = express.Router();

const validateUser = require("../../validate/user")
Router.post("/login", validateUser.validateLogin, UserController.loginPost)
Router.get("/login", UserController.login)
Router.get("/register", UserController.register)
Router.post("/register", validateUser.validateRegister, UserController.registerPost)
Router.get("/logout", UserController.logout)


module.exports = Router