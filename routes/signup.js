const express = require("express");
let router = express.Router();
// for database
const DbService = require("../models/database");



router.route('/')
    .get((req, res) => {
        console.log("inside signup.js GET");
        res.render("pages/signup");

        const db = DbService.getServiceInstance();


        const result = db.getAllData();
        result
            .then(data => {
                console.log(data)
                

            })
            .catch(err => console.log(err))

        

    })
    .post((req, res) => {
        console.log("inside signup.js POST");
        console.log(req.body);



        if (req.body.username == "Naheed")
            req.flash("success", "User successfully registered");
        else
            req.flash("error", "Something went wrong!!");
     
        // res.locals.message = req.flash();

        res.redirect("/home");
    
    })




module.exports = router;