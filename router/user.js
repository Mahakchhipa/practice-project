const express = require("express");

const router = express.Router();

const userRoute = require("./controller/user")



router.post("/createuser",usercreate);



module.exports = router ;
//  isme jo express se route nikala h usko yaha export krenge 