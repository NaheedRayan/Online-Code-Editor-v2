const express = require("express");
let router = express.Router();



router.get("/", (req, res)=>{
    console.log("inside signin.js")
    res.send("Hello from the SignIn page")
})



module.exports = router;