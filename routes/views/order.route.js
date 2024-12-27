const OrderController = require("../../controllers/views/Order.controller");
const express = require("express");
const Router = express.Router();


Router.post("/checkout", OrderController.checkout)
Router.post("/create_payment_url", OrderController.create_payment_url)
Router.get("/vnpay_return", OrderController.vnpay_return)
Router.get("/detail/:id", OrderController.detail)



module.exports = Router