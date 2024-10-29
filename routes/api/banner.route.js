const BannerController = require("../../controllers/api/Banner.controller");
const express = require("express");
const Router = express.Router();

Router.post("/add", BannerController.add)

module.exports = Router