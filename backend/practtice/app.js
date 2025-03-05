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
app.post('/registeruser', async(req,res)=>{
    const {name,email,password} = req.body;
    const user = await userModel.create({
        name,
        email,
        password
    });

    res.send(user);
})
app.get('/getUser', async (req,res)=>{
 const userData = await userModel.find({});
 res.send(userData);
})
app.get('/updateUser',async(req,res)=>{
    
    const updateuser = await userModel.findOneAndUpdate({name:"b"},{email:"c@c.com"})
    res.send("updateUser");
})
app.get('/deleteUser',async(req,res)=>{
    const deleteuser = await userModel.findOneAndDelete({"email":"c@c.com"})

    res.send(deleteuser);
})

app.listen(port,()=>{
    console.log("Server is running on port 3000");
});