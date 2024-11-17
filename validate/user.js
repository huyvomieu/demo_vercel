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

module.exports.validateRegister = (req, res, next) => {
    let email = req.body.email;
    let password = req.body.password;
    if (!req.body.firstname || !req.body.lastname) {
        req.flash("error", "Vui lòng nhập Họ tên!");
        res.redirect("back")
        return;
    }
    if (!email) {
        req.flash("error", "Vui lòng nhập email!");
        res.redirect("back")
        return;
    }
    if (!password || password.length > 20) {
        req.flash("error", "Vui lòng nhập mật khẩu hoặc mật khẩu quá dài!");
        res.redirect("back")
        return;
    }
    next();
}