const express = require("express");
let router = express.Router();
// for database
const DbService = require("../models/database");



router.route('/')
    .get((req, res) => {
        console.log("inside signin.js GET");
        res.render("pages/signin");


    })
    .post((req, res) => {
        console.log("inside signin.js POST");
        // console.log(req.body);
        // res.render("pages/signin");
        const db = DbService.getServiceInstance();

        if (req.body.username_or_email && req.body.password) {

            let username_or_email = req.body.username_or_email;
            let password = req.body.password;

            const result = db.getPassword_for_email_or_username(username_or_email,password);

            
            result.then(result =>{
                console.log(result)
                if(result.length){
                    req.flash("success", "Login Successful");
                    res.redirect("/home")
                }else{
                    req.flash("error", "Invalid Username or Password");
                    res.redirect("/signin");
                }
            }).catch(err => {
                console.log(err)
                res.redirect("/signin")
            })
            
        } else {
            req.flash("error", "Something went wrong!!");
            res.redirect("/signin");
        }
        // res.locals.message = req.flash();

        // res.redirect("/signup");
    })


module.exports = router;