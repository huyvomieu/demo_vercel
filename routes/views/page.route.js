const PageController = require("../../controllers/views/Page.controller");
const express = require("express");
const Router = express.Router();


Router.get("/", PageController.homePage)



module.exports = Router