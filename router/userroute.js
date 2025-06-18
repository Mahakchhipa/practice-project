const express = require("express");
const { usercreate, getalluser, signup } = require("../controller/usercontroller");

const router = express.Router();

router.post("/createuser",usercreate);
router.get("/getalluser",getalluser);
// router.post("/usersignup",signup);



module.exports = router ;
//  isme jo express se route nikala h usko yaha export krenge 