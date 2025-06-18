const express = require("express");
const { usercreate, getalluser } = require("../controller/user");

const router = express.Router();





router.post("/createuser",usercreate);
router.get("/getalluser",getalluser)



module.exports = router ;
//  isme jo express se route nikala h usko yaha export krenge 