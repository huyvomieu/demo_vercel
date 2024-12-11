const OrderController = require("../../controllers/views/Order.controller");
const express = require("express");
const Router = express.Router();


Router.post("/checkout", OrderController.checkout)
Router.get("/detail/:id", OrderController.detail)



module.exports = Router