// const express = require("express");
// const mongoose = require("mongoose");
const user = require("../model/usermodel")
const bcrypt = require("bcryptjs")


// createuser or signup ki api same hoti 

exports.usercreate = async(req,res)=>{
     try{
        console.log("!!!!! req.",req)
    const data = req.body
     const {name,email,  phonenumber,Password} = req.body 
    // const email = req.body.email
    const alreadyemail = await user.findOne({email})
  const alreadyphonenumber = await user.findOne({phonenumber})
    console.log("email is already exits",alreadyemail )
    if(alreadyemail && alreadyphonenumber){
        return res.status(404).send({message:"User already exits in database"})
    }

    if (!(name && email && phonenumber && Password )){
        return res.status(404).send({message:"All fileds are required plese enter all input fileds "})
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(Password, salt);
    const dataunique = {
  name,email, phonenumber,Password:hash  
}

// exports.signup = async(req,res)=>{
//   const data = req.body
//   const newuser = new user(data)
// await newuser.save()
//    return res.status(200).send({message:" Your signup sucessfully"})
// }
console.log("this bcyrpt password genrate",dataunique)
    const mhk = new user(dataunique)
     await mhk.save()
    //  31/32 line mongodb me data save krne ka kaam krte h fxn
    return res.status(201).send(mhk)
     }
     catch(error){
         res.status(500).send({error:error.message})
     }
}

exports.getalluser = async(req,res)=>{
    try{
        const data = await user.find()
    return res.status(202).send(data)
    }
    catch(error){
      return  res.status(500).send({error:error.message})
    }
}

