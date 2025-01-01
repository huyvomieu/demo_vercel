const PageController = require("../../controllers/views/Page.controller");
const express = require("express");
const Router = express.Router();

Router.get("/", PageController.homePage);
Router.get("/policy", PageController.policy);

module.exports = Router;
