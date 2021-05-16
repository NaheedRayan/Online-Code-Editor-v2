const express = require("express");
let router = express.Router();

const DbService = require("../models/database");



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
