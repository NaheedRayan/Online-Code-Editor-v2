const express = require("express");
let router = express.Router();
const DbService = require("../models/database");
const flash = require('connect-flash');




router.post("/", isLoggedIn,(req, res) => {

    const db = DbService.getServiceInstance();

    const result = db.save_file( req.body.file_id , req.body.file_data )

    result.then(result => {
        console.log(result)
        if (result.length) {
            // all is well, return successful user
            res.send(result)
          
        } else {
            // req.flash("success", "File Updated")
            res.send("File updated")
        }
    }).catch(err => {
        console.log(err)
        // req.flash("error", "Something went wrong"); // create the Message and save it to session as flashdata
        res.send("Something went wrong while updating file")
        
    
    })


})


// route middleware to make sure
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}






module.exports = router;