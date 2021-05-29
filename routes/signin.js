const express = require("express");
let router = express.Router();
// for database
const DbService = require("../models/database");
const passport = require("passport");

require('../passport-config')(passport); // pass passport for configuration

router.get("/", (req, res) => {
    console.log("inside signin.js GET");
    res.render("pages/signin");


})

// process the login form
router.post('/', passport.authenticate('local-login', {
        successRedirect: '/editor', // redirect to the secure profile section
        failureRedirect: '/signin', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }),
    function (req, res) {
        res.redirect('/editor');
    });


module.exports = router;