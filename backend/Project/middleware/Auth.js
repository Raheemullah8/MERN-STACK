const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../modles/user");

// Register API
const Register = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array(), msg: "invalid data" });
        }

        const { username, email, password } = req.body;

        const ExistUser = await userModel.findOne({email})
        if(ExistUser){
            return res.status(501).json({msg:"user already Exist"})
        }
        const hashPassword = await bcrypt.hash(password,10)
        const newUser = await userModel.create({
            username,
            email,
            password:hashPassword
        })
        const token = jwt.sign(
            { userid: newUser._id, username: newUser.username, email: newUser.email },
            process.env.JWT_KEY
        );

        res.cookie("token", token);

        res.json({newUser,token});
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}


// Login API
const Login = async (req, res) => {
    try {
        // Validate the incoming data
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array(), msg: "invalid Data" });
        }

        // Destructure the username and password from the request body
        const { username, password } = req.body;

        // Check if the user exists in the database
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(501).json({ err: true, msg: "Username or password not match" });
        }

        // Compare the password with the stored hashed password
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ err: true, msg: "Invalid username or password" });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userid: user._id, username: user.username, email: user.email },
            process.env.JWT_KEY
        );

        // Respond with user data and token
        res.json({
            msg:"user Login sucessFull",
            token
        });

    } catch (error) {
        res.status(500).json({ error: error.message, msg: "Server Error" });
    }
}

module.exports = {Register,Login}