const Banner = require("../../models/Banner.model")

class BannerController {
    // [POST] /api/v1/banner/add
    async add(req, res, err) {
        const banner = new Banner(req.body);
        await banner.save();
        res.json(
            {
                message: "Thêm banner thanh cong!",
                code: 400,
            }
        );
    }
}

module.exports = new BannerController