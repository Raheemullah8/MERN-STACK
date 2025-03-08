const express = require('express');
const dotenv = require("dotenv")
const cookieparser = require("cookie-parser")
dotenv.config();

const app = express();

const userRoute = require('./Routes/user.route');
const indexRoute = require('./Routes/index.route');
const connectoDb = require('./config/DB')
connectoDb();


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser())



app.use('/user',userRoute)
app.use('/',indexRoute)
app.listen(3000,()=>{ console.log("Server is Connect")})