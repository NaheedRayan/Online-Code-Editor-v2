const express = require("express");
let router = express.Router();




router.route('/')
    .get((req, res) => {
        console.log("inside signup.js GET");
        res.render("pages/signup");
    })
    .post((req, res) => {
        console.log("inside signup.js POST");
        console.log(req.body);

        if (req.body.username == "Naheed")
            req.flash("success", "User successfully registered");
        else
            req.flash("error", "Something went wrong!!");

        res.locals.message = req.flash();

        res.render("pages/signup");
    })




module.exports = router;