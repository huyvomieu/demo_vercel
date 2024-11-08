const express = require("express")
const bodyParser = require('body-parser')
const path = require('path')
const flash = require('express-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const routeAPI = require('./routes/api/index.route')
const routeViews = require("./routes/views/index.route")
const routeAdmin = require("./routes/admin/index.admin.route")

require("dotenv").config()


const app = express()

// connect DB
const database = require("./config/database/index")
database.connectDB();

// views engine
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use(methodOverride("_method"));

// data public
app.use(express.static(path.join(__dirname, 'public')))

// parse application/json
app.use(bodyParser.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use(cookieParser('keyboard cat'));
app.use(session({ cookie: { maxAge: 60000 } }));

// flash messages
app.use(flash());



// routes
routeViews(app)
routeAdmin(app)
routeAPI(app)

// listening PORT 3000
app.listen(process.env.PORT, () => {
    console.log(`app listening ${process.env.PORT}`)
})