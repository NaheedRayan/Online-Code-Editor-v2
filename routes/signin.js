const express = require("express");
let router = express.Router();


router.route('/')
    .get((req, res) => {
        console.log("inside signin.js GET");
        res.render("pages/signin");
    })
    .post((req, res) => {
        console.log("inside signin.js POST");
        console.log(req.body);
        res.render("pages/signin");
    })


module.exports = router;
