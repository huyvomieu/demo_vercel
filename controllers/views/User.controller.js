const User = require("../../models/User.model")
const md5 = require("md5")
class UserController {
    // [GET] user/login
    async login(req, res, err) {
        res.render("client/user/login");
    }
    // [GET] user/logout
    async logout(req, res, err) {
        let tokenUser = req.cookies.tokenUser;
        if (tokenUser) {
            res.clearCookie("tokenUser");
            req.flash("success", "Đăng xuất thành công!")
        }
        res.redirect("back")
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
            console.log("OK")
            res.redirect("back")
            return;
        }
        req.flash("success", "Đăng nhập thành công!")
        res.cookie("tokenUser", emailExist.tokenUser);
        res.redirect("/")
    }
    // [GET] user/register
    async register(req, res, err) {
        res.render("client/user/register");
    }
    // [POST] user/registerPOST
    async registerPost(req, res, err) {
        const email = req.body.email;
        const emailExist = await User.findOne({ email: email })
        if (emailExist) {
            req.flash("error", "Email đã tồn tại trong hệ thống!");
            res.redirect("back")
            console.log("ok")
            return;
        }
        try {
            req.body.password = md5(req.body.password)
            const user = new User(req.body);
            await user.save();
            req.flash("success", "Tạo tài khoản thành công!");
            res.cookie("tokenUser", user.tokenUser);
            res.redirect("/")
        } catch (err) {
            req.flash("error", "Có lỗi xảy ra!");
            res.redirect("back")
        }
    }
    // [GET] user/profile
    async profile(req, res, err) {
        res.render("client/user/profile");
    }

    // [PATCH] user/profile/update
    async updateProfile(req, res, err) {
        // Lấy id người dùng từ middleware

        var id = res.locals.UserInfor.id
        try {
            await User.findOneAndUpdate({_id: id}, req.body)
            req.flash("success", "Cập nhật thông tin thành công!")
            res.redirect("back")
        } catch (error) {
            
        }
    }
}
module.exports = new UserController