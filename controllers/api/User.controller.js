const User = require("../../models/User.model")

const md5 = require("md5")
class UserController {
    // [POST] /api/v1/user/login
    async login(req, res, err) {
        const email = req.body.email;
        const password = req.body.password;
        const emailExist = await User.findOne({ email: email })
        if (!emailExist) {
            res.json({
                message: "Email không tồn tại trong hệ thống",
            })
            return;
        }
        if (emailExist.password != md5(password)) {
            res.json({
                message: "Mật khẩu không khớp",
            })
            return;
        }
        res.json({
            code: 200,
            message: "Đăng nhập thành công!",
        })
        return;
    }
    // [POST] /api/v1/user/register
    async register(req, res, err) {
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
            console.log(req.body)
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