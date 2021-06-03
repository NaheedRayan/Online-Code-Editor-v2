const express = require("express");
let router = express.Router();



router.get("/", (req, res) => {
    console.log("inside home.js")
    res.render("pages/price");
})


module.exports = router;
