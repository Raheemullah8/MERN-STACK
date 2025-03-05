const express = require('express');
const { body, validationResult } = require('express-validator');
const userModel = require("../modles/user");

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('index');
});

router.post('/register',
    body("username").trim().isLength({ min: 3 }),
    body("email").trim().isEmail().isLength({ min: 5 }),
    body("password").trim().isLength({ min: 3 }),
    async (req, res) => {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({ error: error.array(), msg: "invalid data" });
            }

            const { username, email, password } = req.body;
            const newUser = await userModel.create({
                username,
                email,
                password
            })

            res.send(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Server error", error: error.message });
        }
    });

module.exports = router;
