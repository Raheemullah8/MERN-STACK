const mongoose = require('mongoose');
const db = 'mongodb://localhost:27017/mernstack';
 mongoose.connect(db)
 .then(()=>{
   console.log("Connected to Database");
 })
 .catch((err)=>{
   console.log("Database not connected",err.message);
 })

 module.exports = mongoose;
