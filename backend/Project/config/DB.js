const mongoose = require('mongoose');

const connectDb = ()=>{
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("database connect")
}).catch((err)=>{
    console.log("database connection error",err.message)
})
}

module.exports = connectDb