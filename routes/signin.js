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
        
        // if (req.body.remember) {
        //     req.session.cookie.maxAge = 1000 * 60 * 9;
        // } else {
        //     req.session.cookie.expires = false;
        // }
        res.redirect('/editor');
    });

// router.post("/", (req, res) => {
//     console.log("inside signin.js POST");
//     // console.log(req.body);
//     // res.render("pages/signin");
//     const db = DbService.getServiceInstance();

//     if (req.body.username_or_email && req.body.password) {

//         let username_or_email = req.body.username_or_email;
//         let password = req.body.password;

//         const result = db.getPassword_for_email_or_username(username_or_email, password);


//         result.then(result => {
//             console.log(result)
//             if (result.length) {
//                 req.flash("success", "Login Successful");
//                 res.redirect("/editor")
//             } else {
//                 req.flash("error", "Invalid Username or Password");
//                 res.redirect("/signin");
//             }
//         }).catch(err => {
//             console.log(err)
//             res.redirect("/signin")
//         })

//     } else {
//         req.flash("error", "Something went wrong!!");
//         res.redirect("/signin");
//     }
//     // res.locals.message = req.flash();

//     // res.redirect("/signup");
// })


// route middleware to make sure
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;