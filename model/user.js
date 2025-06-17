const mongoose = require("mongoose")
const { stringify } = require("postcss")


const userschema = new  mongoose.Schema({
    
   
    name:{
        typeof :String,
        require:true,
    },

    email:{
        typeof:String,
        require:true,
    },
    password:{
        typeof:String,
        require:true,
    },
    phonenumber:{
        typeof:Number,
        require:true,
    },
    age:{
        typeof:Number,
        require:true,

    }

},{timestamp:true,versionKey:false})

module.exports= userschema.module("userfile",userschema)