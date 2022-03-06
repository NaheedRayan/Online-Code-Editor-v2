const express = require("express");
let router = express.Router();
const DbService = require("../models/database");
const flash = require('connect-flash');


router.post("/",isLoggedIn,(req,res)=>{

	const db1 = DbService.getServiceInstance();

	console.log("++====================================")
	console.log(req.body.userName)
	const result1 = db1.update_profile(req.user.id , req.body.userName , req.body.firstName , req.body.lastName , req.body.inputEmail , req.body.inputPassword , req.body.inputAddress , req.body.inputCity , req.body.inputZip , req.body.inputNumber)

	result1.then(result => {
		// console.log(result)
		if (result.length) {
			//render and flash does not work here
			// res.render("pages/userProfile")
            // res.redirect(req.get('referer'));
		} else {
			// req.flash("error", "Something went wrong")
			// res.send("")
		}
	}).catch(err => {
		console.log(err)
		// req.flash("error", "Something went wrong"); // create the Message and save it to session as flashdata
		res.send("Something went wrong while deleting the file")
		res.render("pages/signup");
	})

    
	req.flash("success", "Profile Updated")
    res.redirect(req.get('referer'));

	// res.render("pages/userProfile")
})


// route middleware to make sure
function isLoggedIn(req, res, next) {
	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();
	// if they aren't redirect them to the home page
	res.redirect('/signin');
}




module.exports = router;