const UserController = require("../../controllers/views/User.controller");
const express = require("express");
const Router = express.Router();

const multer = require('multer');
const fileUpload = multer()

const uploadToCloudinaryHelper = require('../../helper/uploadToCloudinary')

const validateUser = require("../../validate/user")
Router.post("/login", validateUser.validateLogin, UserController.loginPost)
Router.get("/login", UserController.login)
Router.get("/register", UserController.register)
Router.post("/register", validateUser.validateRegister, UserController.registerPost)
Router.get("/logout", UserController.logout)
Router.get("/profile", UserController.profile)
Router.patch("/profile/update", fileUpload.single('avatar'), uploadToCloudinaryHelper, UserController.updateProfile)


module.exports = Router