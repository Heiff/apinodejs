const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/TGwebBack',{
            useNewUrlParser:true,
        })
        console.log('mongoDB succes ');
    } catch (error) {
        console.log(error,'error connectDB');
    }
}

module.exports = connectDB;