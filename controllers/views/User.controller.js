const User = require("../../models/User.model")
const md5 = require("md5")
class UserController {
    // [GET] user/login
    async login(req, res, err) {
        res.render("client/user/login");
    }
    // [POST] user/loginPost
    async loginPost(req, res, err) {
        const email = req.body.email;
        const password = req.body.password;
        const emailExist = await User.findOne({ email: email })
        // res.json(req.body)
        // return;
        if (!emailExist) {
            req.flash("error", "Email không tồn tại trong hệ thống")
            res.redirect("back")
            return;
        }
        if (emailExist.password != md5(password)) {
            req.flash("error", "Mật khẩu không khớp!")
            res.redirect("back")
            return;
        }
        req.flash("success", "Đăng nhập thành công!")
        res.cookie("token", emailExist.tokenUser);
        res.redirect("/")
    }
    // [GET] user/register
    async register(req, res, err) {
        res.render("client/user/register");
    }
    // [POST] user/registerPOST
    async registerPost(req, res, err) {
        const email = req.body.email;
        const username = req.body.username;
        const emailExist = await User.findOne({ email: email })
        const usernameExist = await User.findOne({ username: username })
        if (emailExist) {
            res.json({
                message: "Email đã tồn tại trong hệ thống",
            })
            return;
        }
        if (usernameExist) {
            res.json({
                message: "Tên đăng nhập đã tồn tại trong hệ thống",
            })
            return;
        }
        try {
            req.body.password = md5(req.body.password)
            const user = new User(req.body);

            await user.save();
            res.json({
                code: 200,
                message: "Thêm Tài khoản thành công!",

            })
        } catch (err) {
            res.json({
                code: 400,
                message: "Lỗi!" + err,
            })
        }
    }
}
module.exports = new UserController