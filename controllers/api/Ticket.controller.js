const Movie = require("../../models/Movie.model")
const Ticket = require("../../models/Ticket.model")

class TicketController {
    // [GET] /api/v1/ticket/
    async getall(req, res, err) {
        let find = {
        }
        
        let id_movie = req.query.id_movie
        let datestart = req.query.date
        if(id_movie) {
            find.id_movie = id_movie
        }
        if(datestart) {
            find.datestart = datestart
        }
        const tickets = await Ticket.find(find)
        res.json(tickets);
    }
    // [GET] /api/v1/movie/detail/:id
    async detail(req, res, err) {
        try {
            const id = req.params.id;
            const movie = await Movie.findOne({ _id: id });
            res.json(movie);
        } catch (error) {
            res.json({
                code: 400,
                message: "Không tồn tại!" + error,
            })
        }

    }
   
  
}

module.exports = new TicketController()