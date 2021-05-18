const express = require("express");
let router = express.Router();
// for database
const DbService = require("../models/database");



router.route('/')
    .get((req, res) => {
        console.log("inside signup.js GET");
        res.render("pages/signup");

        // const db = DbService.getServiceInstance();
        // const result = db.getAllData();
        // result
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(err => console.log(err))

    })
    .post((req, res) => {
        console.log("inside signup.js POST");
        // console.log(req.body);
        const db = DbService.getServiceInstance();

        if (req.body.username && req.body.email) {

            let username = req.body.username;
            let email = req.body.email;
            let password = req.body.password;

            const result1 = db.getUsername(username);
            const result2 = db.getEmail(email);

            // getting all the promises and then processing it
            Promise.all([result1, result2]).then(data => {

                    if (data[0].length && data[1].length == 0) {
                        console.log(data[0]);
                        req.flash("error", "The username exists!!");
                        res.redirect("/signup");
                    } else if (data[0].length == 0 && data[1].length) {
                        console.log(data[1]);
                        req.flash("error", "The email exists!!");
                        res.redirect("/signup");
                    } else if (data[0].length && data[1].length) {
                        console.log(data[1]);
                        req.flash("error", "The username and email already exists!!");
                        res.redirect("/signup");
                    } else if (req.body.password != req.body.confirm_password) {
                        req.flash("error", "Passwords do not match");
                        res.redirect("/signup");
                    } else {
                        let val = [
                            [username, email, password]
                        ];
                        let result = db.saveNewUserData(val);
                        result
                            .then(data => {
                                console.log(data)
                                req.flash("success", "User successfully registered");
                                res.redirect("/home")
                            })
                            .catch(err => {
                                console.log(err);
                                res.redirect("/signup");
                            })

                    }

                })
                .catch(err => console.log(err))

        } else {
            req.flash("error", "Something went wrong!!");
            res.redirect("/signup");
        }
        // res.locals.message = req.flash();

        // res.redirect("/signup");

    })




module.exports = router;