const mongoose = require("mongoose")

async function connectToDB(){

   await mongoose.connect(process.env.MONGO_URI)
    console.log("Connect to DataBase");
    
}

module.exports = connectToDB