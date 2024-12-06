module.exports.validatecreateMovie = (req, res, next) => {
    let name = req.body.name;
    let price = req.body.price;

    if (name.length < 0) {
        req.flash("error", "Vui lòng nhập tên phim!");
        res.redirect("back")
        return;
    }
    if (!Number(price)) {
        req.flash("error", "Vui lòng nhập giá chỉ gồm số!");
        res.redirect("back")
        return;
    }
    next();
}
