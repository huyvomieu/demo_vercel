const Admin = require("../../models/Admin.model")
const Movie = require("../../models/Movie.model")
const Ticket = require("../../models/Ticket.model")
const Order = require("../../models/Order.model")
const User = require("../../models/User.model")
const md5 = require("md5")
class PageController {
    // [GET] /admin
    async dashboard(req, res, err) {
        res.render("admin/pages/dashboard",
            {
                title: "Dashboard",
                TitlePage: "Dashboard",
            }
        );
    }
    // [GET] /admin/login
    async login(req, res, err) {
        // Tao tk admin 
        // const admin = new Admin({username: "admin", password: md5('123456'), email: "huy040424@gmail.com"})
        // await admin.save();
        res.render("admin/auth/login",
            {
                title: "Login",
                TitlePage: "Login",
            }
        );
    }
    // [GET] /admin/report
    async report(req, res, err) {
        let userActive = await User.countDocuments({ status: 1 });
        let userblock = await User.countDocuments({ status: 0 });

        let movieActive = await Movie.countDocuments();

        let orderSuccess = await Order.countDocuments({ status: 1 })
        let orderProcess = await Order.countDocuments({ status: 0 })
        let orderCancel = await Order.countDocuments({ status: -1 })

        let tickets = await Ticket.find();
        let ticketdd = 0;
        let ticketcd = 0;
        for (const ticket of tickets) {
            ticketcd += ticket.quantity;
            ticketdd += ticket.seats.length;
        }
        res.render("admin/pages/report",
            {
                title: "Report",
                TitlePage: "Report",
                user: { userActive, userblock },
                movie: { movieActive, },
                order: { orderSuccess, orderProcess, orderCancel },
                ticket: { ticketcd, ticketdd, ticketTotal: ticketdd + ticketcd },
            }
        );
    }
    // [GET] /admin/logout
    async logout(req, res, err) {
        res.clearCookie('tokenAdmin')
        res.redirect('/admin/login')
    }
    // [POST] /admin/login
    async loginPost(req, res, err) {
        var username = req.body.username;
        var password = md5(req.body.password);
        const accountExist = await Admin.findOne({ username: username, password: password }).select('-password')
        if (!accountExist) {
            req.flash("danger", "Tên đăng nhập hoặc mật khẩu không chính xác !");
            res.redirect('back')
            return;
        }
        res.cookie('tokenAdmin', accountExist.tokenAdmin);
        res.locals.tokenAdmin = accountExist;
        res.redirect("/admin");

    }

}
module.exports = new PageController