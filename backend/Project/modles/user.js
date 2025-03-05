const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,  // Fixed spelling from 'require' to 'required'
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, "Username must be at least 3 characters long"],  // Corrected minLength and message
    },
    email: {
        type: String,
        required: true,  
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [5, "Email must be at least 5 characters long"],  
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "Password must be at least 5 characters long"],  
    }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;  
