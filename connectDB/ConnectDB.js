const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
require('dotenv');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO,{
            useNewUrlParser:true,
        })
        console.log(`mongoDB succes ${conn.connection.host}`);
    } catch (error) {
        console.log(error,'error connectDB');
    }
}

module.exports = connectDB;