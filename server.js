const mongoose = require("mongoose");
const express = require("express");
const app = express()
const cors = require('cors')
require('dotenv').config()


const mongodburl = process.env.MONGOURL;
const port = process.env.PORT;

app.use(express.json())

app.use(cors())

 mongoose.connect(mongodburl)
 .then(()=>{
    console.log("MongooDb is connected and port is",mongodburl)
 })
 .catch(error=>{
    console.log( "Mongoo db is not connected",error.message)
 })

app.listen(port,()=>{
    console.log(` Server is running on ${port}`)
})

const userDataroute = require("./router/user")
app.use("/user/api",userDataroute)