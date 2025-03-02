const express = require('express');
const app = express();
const mongodb = require('./config/DB');
const userModel = require('./models/user');
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("index");
});
app.post('/registeruser',(req,res)=>{
    console.log(req.body);
    res.send("Data received");
})

app.listen(port,()=>{
    console.log("Server is running on port 3000");
});