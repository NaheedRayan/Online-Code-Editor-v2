const express = require("express");
let router = express.Router();
// for database
const DbService = require("../models/database");
const passport = require("passport");


router.get("/", notLoggedIn , (req, res) => {
    console.log("inside signup.js GET");
    res.render("pages/signup");


})
router.post("/", passport.authenticate('local-signup', {
    successRedirect: '/editor', // redirect to the secure editor section
    failureRedirect: '/signup', // redirect back to the signup page if there is an error
    failureFlash: true // allow flash messages
}), (req, res) => {
    console.log("inside signup.js POST");
    res.redirect("/home");
})



// route middleware to make sure
function notLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (!req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;