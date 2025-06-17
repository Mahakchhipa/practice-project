const mongoose = require("mongoose");
const express = require("express");
const app = express()
const cors = require(cors)

const mongodburl = "mongodb://localhost:27017/userdata";
const port = 8080;

app.use(express.json())

 mongoose.connect(mongodburl)
 .then(()=>{
    console.log(` MongooDb is connected and port is ${port}`)
 })
 .catch(error=>{
    console.log( "Mongoo db is not connected",error.message)
 })

app.listen(port,()=>{
    console.log(` Server is running on ${port}`)
})
app.use("/user/api",userRoute)
const userDataroute = require("./router/user")
