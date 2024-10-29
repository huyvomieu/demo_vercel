module.exports.validateLogin = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;

    if (email == "") {
        req.flash("error", "Vui lòng nhập email!");
        res.redirect("back")
        return;
    }
    if (password == "") {
        req.flash("error", "Vui lòng nhập mật khẩu!");
        res.redirect("back")
        return;
    }
    next();
}