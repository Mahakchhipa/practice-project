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
    
},{timestamp:true,versionKey:false})

module.exports=mongoose.model("userdata",userschema)


// ************this is second way to export this schema *********** 
// const userdata = mongoose.model("userdata",userschema)
// module.exports.userdata