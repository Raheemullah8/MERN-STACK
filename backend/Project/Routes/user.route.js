const express = require('express');
const { body } = require('express-validator');
const { Register,Login} = require('../controller/Auth');



const router = express.Router();

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register',
    body("username").trim().isLength({ min: 3 }),
    body("email").trim().isEmail().isLength({ min: 5 }),
    body("password").trim().isLength({ min: 3 }), Register);

router.get("/login",(req,res)=>{
    res.render("login")
})  
router.post('/login',
    body("username").trim().isLength({min:3}),
    body("password").trim().isLength({min:3}),
    Login
)  
module.exports = router;
