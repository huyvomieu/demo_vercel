const PageController = require("../../controllers/admin/Page.controller");
const express = require("express");
const Router = express.Router();

const authMiddleware = require('../../middlewares/auth.middleware')

Router.get("/", authMiddleware, PageController.dashboard)
Router.get("/login", PageController.login)
Router.post("/login", PageController.loginPost)
Router.get("/logout", PageController.logout)



module.exports = Router