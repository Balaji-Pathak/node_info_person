const mongoose = require("mongoose");
// define the mongoDB connection url
const mongoURL = 'mongodb://localhost:27017/person' ; 
mongoose.connect(mongoURL, {
   
})
const db = mongoose.connection;
db.on('connected', ()=>{
    console.log("connected to mongoDB");
    
})
db.on('disconnected', ()=>{
    console.log("disconnected to mongoDB");
    
})
db.on('error', ()=>{
    console.log("error occured  in connection");
    
})
module.exports = db;