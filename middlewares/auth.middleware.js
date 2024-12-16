const Admin = require('../models/Admin.model')

module.exports = async (req, res, next) => {
    let tokenAdmin = req.cookies.tokenAdmin;
    if (!tokenAdmin) {
        res.redirect("/admin/login")
        return;
    }
    const tokenExist = await Admin.findOne({ tokenAdmin: tokenAdmin }).select("-password")
    if (tokenExist) {
        next();
        res.locals.AdminInfor = tokenExist;
    }
    else {
        res.redirect("/admin/login")
        return
    }
}