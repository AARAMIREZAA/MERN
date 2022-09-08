// IMPORT DEPENDECIES
// 1. IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");


// INSTANTIATE AN EXPRESS SERVER
const app = express();
const port = 8000;

// START MONGOOSE CONFIG
require("./config/mongoose.config");

//CONFIGURE EXPRESS
app.use(cookieParser())
app.use(cors({credentials:true, origin:"http://localhost:3000"}))


// SETUP MIDDLEWARE
// ------ALLOWING USE OF JSON
app.use(express.json())
// ------ALLOWING USE OF POST REQUEST INFO
app.use(express.urlencoded({extended: true}))


// DEFINE API ENDPOINTS
const userRoutes = require("./routes/user.route")
userRoutes(app)

const productManagerRoutes = require("./routes/product.routes")
productManagerRoutes(app)

// RUN EXPRESS SERVER
app.listen(port, () => console.log("Listening on port 8000"));
