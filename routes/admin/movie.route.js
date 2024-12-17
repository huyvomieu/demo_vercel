const MovieController = require("../../controllers/admin/Movie.controller");
const express = require("express");
const Router = express.Router();

const multer = require('multer');
const fileUpload = multer()

const uploadToCloudinaryHelper = require('../../helper/uploadToCloudinary')

Router.get("/create", MovieController.create);
Router.post("/create", fileUpload.single('avatar'), uploadToCloudinaryHelper, MovieController.createPost);
Router.get("/edit/:id", MovieController.edit);
Router.patch("/edit/:id", fileUpload.single('avatar'), uploadToCloudinaryHelper, MovieController.editPatch);
Router.delete("/delete/:id", MovieController.deleteOne);
Router.get("/", MovieController.index)



module.exports = Router