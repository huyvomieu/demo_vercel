const Order = require("../../models/Order.model")
const Ticket = require("../../models/Ticket.model")

const sortObject = require('../../helper/sortObj')

const moment = require('moment')
const config = require('config');
class OrderController {
    // [POST] /order/checkout
    async checkout(req, res, err) {
        const order = new Order(req.body);
        // console.log(req.body)
        // await order.save();
        // res.redirect('/ticket')
    }
    // [GET] /order/detail/:id
    async detail(req, res, err) {
        var order_id = req.params.id;
        const order = await Order.findOne({ order_id: order_id })
        console.log(order)
        res.render('client/ticket/detail', {
            title: "Chi tiết đơn hàng",
            titlePage: "Order",
            order
        })
    }
    // [POST] /order/create_payment_url
    async create_payment_url(req, res, next) {

        process.env.TZ = 'Asia/Ho_Chi_Minh';

        let date = new Date();
        let createDate = moment(date).format('YYYYMMDDHHmmss');

        // Tạo giao dịch
        let amount = req.body.total;
        let orderId = req.body.order_id;
        const order = new Order(req.body);
        await order.save();
        // end
        // Lấy địa chỉ ip của người dùng
        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;

        let tmnCode = config.get('vnp_TmnCode');
        let secretKey = config.get('vnp_HashSecret');
        let vnpUrl = config.get('vnp_Url');
        let returnUrl = config.get('vnp_ReturnUrl');  // url Vppay trả về kq giao dịch
        let bankCode = "NCB"

        let locale = 'vn';
        let currCode = 'VND';
        let vnp_Params = {};
        vnp_Params['vnp_Version'] = '2.1.0';
        vnp_Params['vnp_Command'] = 'pay';
        vnp_Params['vnp_TmnCode'] = tmnCode;
        vnp_Params['vnp_Locale'] = locale;
        vnp_Params['vnp_CurrCode'] = currCode;
        vnp_Params['vnp_TxnRef'] = orderId;
        vnp_Params['vnp_OrderInfo'] = 'Thanh toan cho ma GD:' + orderId;
        vnp_Params['vnp_OrderType'] = 'other';
        vnp_Params['vnp_Amount'] = amount * 100;
        vnp_Params['vnp_ReturnUrl'] = returnUrl;
        vnp_Params['vnp_IpAddr'] = ipAddr;
        vnp_Params['vnp_CreateDate'] = createDate;
        vnp_Params['vnp_BankCode'] = bankCode;

        vnp_Params = sortObject(vnp_Params);

        let querystring = require('qs');
        let signData = querystring.stringify(vnp_Params, { encode: false });
        let crypto = require("crypto");
        let hmac = crypto.createHmac("sha512", secretKey);
        let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
        vnp_Params['vnp_SecureHash'] = signed;
        vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });

        res.redirect(vnpUrl)
    };
    // [GET] /order/vnpay_return
    async vnpay_return(req, res, next) {
        let vnp_Params = req.query;
        let orderId = req.query.vnp_TxnRef;
        let secureHash = vnp_Params['vnp_SecureHash'];

        delete vnp_Params['vnp_SecureHash'];
        delete vnp_Params['vnp_SecureHashType'];

        vnp_Params = sortObject(vnp_Params);

        let tmnCode = config.get('vnp_TmnCode');
        let secretKey = config.get('vnp_HashSecret');

        let querystring = require('qs');
        let signData = querystring.stringify(vnp_Params, { encode: false });
        let crypto = require("crypto");
        let hmac = crypto.createHmac("sha512", secretKey);
        let signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

        if (secureHash === signed) {
            //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
            const order = await Order.findOne({ order_id: orderId })
            order.status = 1;
            let arraySeat = order.seats.split(', ');
            let quantitySeat = arraySeat.length;
            const ticket = await Ticket.findOne({ _id: order.ticket_id });
            // Giảm số lượng vé
            ticket.quantity -= quantitySeat;
            // Thêm vé đã đặt vào ticket
            ticket.seats = ticket.seats.concat(arraySeat);
            // save 
            order.save();
            ticket.save();
            res.render('client/pages/success', { code: vnp_Params['vnp_ResponseCode'] })
        } else {
            await Order.findOneAndUpdate({ order_id: orderId }, { status: -1 })
            res.render('client/pages/success', { code: '97' })
        }
    }


}

module.exports = new OrderController