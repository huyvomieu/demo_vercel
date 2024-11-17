const User = require('../models/User.model')

module.exports = async (req, res, next) => {
    let tokenUser = req.cookies.tokenUser;
    if (tokenUser) {
        const tokenExist = await User.findOne({ tokenUser: tokenUser }).select("-password")
        if (tokenExist) {
            res.locals.tokenExist = true;
            res.locals.UserInfor = tokenExist;
        }
        else {
            res.locals.tokenExist = false;
        }
    }
    else {
        res.locals.tokenExist = false;
    }


    next()
} 