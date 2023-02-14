const {Schema , model} = require('mongoose');

const Products = new Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    descr:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
})

module.exports = model('TGwebBack',Products)