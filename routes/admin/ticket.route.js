const TicketController = require("../../controllers/admin/Ticket.controller");
const express = require("express");
const Router = express.Router();


Router.get("/create", TicketController.create);
Router.post("/create", TicketController.createPost);
Router.get("/edit/:id", TicketController.edit);
Router.patch("/edit/:id", TicketController.editPatch);
Router.delete("/delete/:id", TicketController.deleteOne);
Router.get("/", TicketController.index)



module.exports = Router