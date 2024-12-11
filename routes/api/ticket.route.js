const TicketController = require("../../controllers/api/Ticket.controller");
const express = require("express");
const Router = express.Router();

Router.get("/", TicketController.getall)
Router.get("/detail/:id", TicketController.detail)

module.exports = Router