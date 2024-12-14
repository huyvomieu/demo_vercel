const User = require("../../models/User.model")

const fomatDate = require('../../helper/formatDate')

const md5 = require("md5")
class UserController {
    // [GET] /admin/movie
    async index(req, res, err) {
        const users = await User.find({});

        
        // format ngày tạo
        users.map(user => {
            console.log(fomatDate(user.createdAt))
            user.createdAt = fomatDate(user.createdAt)
            user.createdFormat = fomatDate(user.createdAt)
            console.log(user)
        })

        res.render("admin/user/index",
            {
                title: "Customer",
                TitlePage: "Customer",
                users: users,

            }
        ); 
    }
    // [GET] /admin/movie/create
    async create(req, res, err) {
        res.render("admin/user/create",
            {
                title: "Customer",
                TitlePage: "Customer",

            }
        );
    }
    // [GET] /admin/user/edit/:id
    async edit(req, res, err) {
        let id = req.params.id;
        const record = await User.findOne({ _id: id })

        // format lại ngày tạo
        record.createdAt = fomatDate(record.createdAt)
        res.render("admin/user/edit",
            {
                title: "Customer",
                TitlePage: "Customer",
                record: record
            }
        );
    }
    // [PATCH] /admin/user/edit/:id
    async editPatch(req, res, err) {
        let id = req.params.id;
        await User.findOneAndUpdate({ _id: id }, req.body)
        req.flash("success", "Cập nhật người dùng thành công!");
        res.render("admin/user/edit",
            {
                title: "Customer",
                TitlePage: "Customer",
                record: record
            }
        );
    }
    // [GET] /admin/user/reset/:id
    async resetPass(req, res, err) {
        let id = req.params.id;
        let password = md5("00000000")
        await User.findOneAndUpdate({ _id: id }, { password: password })
        req.flash("success", "Reset mật khẩu người dùng thành công!");
        res.redirect("back")
    }
    // [DELETE] /admin/movie/delete/:id
    async delete(req, res, err) {
        let id = req.params.id;
        console.log(id)
        await User.findOneAndDelete({ _id: id })
        req.flash("success", "Xóa người dùng thành công!");
        res.redirect("back")
    }

}
module.exports = new UserController