const Order = require("../../models/Order.model")

class OrderController {
    // [POST] /order/checkout
    async checkout(req, res, err) {
        const order =  new Order(req.body);
        console.log(req.body)
        await order.save();
        res.redirect('/order/detail/' + req.body.order_id)
    }
    // [POST] /order/detail/:id
    async detail(req, res, err) {
        var order_id = req.params.id;
        const order = await Order.findOne({order_id: order_id})
        console.log(order)
        res.render('client/ticket/detail', {
            title: "Chi tiết đơn hàng",
            titlePage: "Order",
            order
        })
    }


}

module.exports = new OrderController