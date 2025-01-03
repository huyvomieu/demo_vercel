const Ticket = require("../../models/Ticket.model")
const User = require("../../models/User.model")
const Movie = require("../../models/Movie.model")
class TicketController {
    // [GET] /admin/ticket
    async index(req, res, err) {
        const tickets = await Ticket.find({});
        for await (const item of tickets) {
            item.movie_info = await Movie.findOne({ _id: item.id_movie })
        }

        res.render("admin/ticket/index",
            {
                title: "Ticket",
                TitlePage: "Ticket",
                tickets: tickets,

            }
        );
    }
    // [GET] /admin/ticket/create
    async create(req, res, err) {
        const movies = await Movie.find({})
        res.render("admin/ticket/create",
            {
                title: "Ticket",
                TitlePage: "Ticket",
                movies
            }
        );
    }
    // [POST] /admin/ticket/create
    async createPost(req, res, err) {
        const ticket = new Ticket(req.body);
        await ticket.save();
        req.flash("success", "Thêm vé thành công!!")
        res.redirect('back')
    }
    // [GET] /admin/ticket/edit/:id
    async edit(req, res, err) {
        let id = req.params.id;
        const record = await Ticket.findOne({ _id: id })
        console.log(record)
        const movies = await Movie.find({})
        res.render("admin/ticket/edit",
            {
                title: "Ticket",
                TitlePage: "Ticket",
                ticket: record,
                movies
            }
        );
    }
    // [PATCH] /admin/ticket/edit/:id
    async editPatch(req, res, err) {
        let id = req.params.id;
        await Movie.findOneAndUpdate({ _id: id }, req.body)
        req.flash("success", "Cập nhật phim thành công")
        res.redirect("back")
    }
    // [DELETE] /admin/ticket/delete/:id
    async deleteOne(req, res, err) {
        let id = req.params.id;
        await Movie.findOneAndDelete({ _id: id })
        req.flash("success", "Xóa phim thành công")
        res.redirect("back")
    }

}
module.exports = new TicketController()