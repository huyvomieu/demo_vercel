const Admin = require("../../models/Admin.model")
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
    // [GET] /admin/logout
    async logout(req, res, err) {
        res.clearCookie('tokenAdmin')
        res.redirect('/admin/login')
    }
    // [POST] /admin/login
    async loginPost(req, res, err) {
        var username = req.body.username;
        var password = md5(req.body.password);
        const accountExist = await Admin.findOne({username: username,password: password }).select('-password')
        if(!accountExist) {
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