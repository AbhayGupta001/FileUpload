const mongoose = require('mongoose');

const file = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    tags:{
        type:String
    }
});

module.exports = mongoose.model("File",file);