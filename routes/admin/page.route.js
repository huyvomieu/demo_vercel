const PageController = require("../../controllers/admin/Page.controller");
const express = require("express");
const Router = express.Router();


Router.get("/", PageController.dashboard)



module.exports = Router