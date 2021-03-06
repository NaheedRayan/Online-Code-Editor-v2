const express = require("express");
let router = express.Router();
const DbService = require("../models/database");
const flash = require('connect-flash');



router.get("/", isLoggedIn, (req, res) => {
	console.log("inside user profile man")


	const db = DbService.getServiceInstance();

	const result = db.getUserById(req.user.id)

	result.then(result => {
		// console.log(result)
		if (result.length) {
			// all is well, return successful user

			// let obj = JSON.parse(result)

			// console.log(result[0])
			res.render("pages/userProfile", {
				username: result[0].username,
				firstname: result[0].first_name,
				lastname: result[0].last_name,
				email: result[0].email,
				password: result[0].password,
				address: result[0].address,
				city: result[0].city,
				zip: result[0].zip,
				phone: result[0].phone

			});
			// res.send(result)

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


	// res.render("pages/userProfile");
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