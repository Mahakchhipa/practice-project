const mongoose = require("mongoose")


const userschema = new  mongoose.Schema({
    
    "name":String,
    "email":String,
    "password":String,
    "phonenumber":Number,
    "age":Number,
    "Gender":String


},{timestamp:true,versionKey:false})

module.exports.userschema.module("user",userschema)