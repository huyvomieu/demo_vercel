const TicketController = require("../../controllers/views/Ticket.controller");
const express = require("express");
const Router = express.Router();

Router.get("/", TicketController.index)

module.exports = Router