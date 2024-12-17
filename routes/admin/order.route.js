const OrderController = require("../../controllers/admin/Order.controller");
const express = require("express");
const Router = express.Router();



Router.get("/", OrderController.index)
Router.patch("/changeStatus/:id", OrderController.changeStatus)



module.exports = Router