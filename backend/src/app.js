const express = require('express');
const app = express();
const authRoute = require('./routes/auth.route');
const cors = require('cors');
const config = require('./config/config')
const userRoute = require('./routes/user.route');
const morgan = require('morgan');
const productRoute = require('./routes/product.route')

app.use(cors({
    origin : config.FRONTEND_URL,
    credentials : true
}))

app.use(morgan("dev"))
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/", authRoute)
app.use("/user", userRoute);
app.use("/product", productRoute);

module.exports = app;