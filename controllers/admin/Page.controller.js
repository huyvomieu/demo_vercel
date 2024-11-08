class PageController {
    // [GET] /admin
    async dashboard(req, res, err) {
        res.render("admin/pages/dashboard",
            {
                title: "Dashboard",
                TitlePage: "Dashboard",
            }
        );
    }

}
module.exports = new PageController