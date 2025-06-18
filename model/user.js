const mongoose = require("mongoose")

const userschema = new  mongoose.Schema({
    
    name:{
       type: String,
      required:true
        
    },
    email:{
        type: String,
        required:true,
         unique:true
    },
    Password:{
        type: String,
        required:true,
       
    },
    phonenumber:{
        type:Number,
        required:true,
         unique:true
    },
    // age:{
    //     typeof:Number,
    //     required:true

    // }

},{timestamp:true,versionKey:false})

module.exports=mongoose.model("userdata",userschema)