const express = require("express");
let router = express.Router();



router.get("/" , (req, res) => {
    console.log("inside home.js")
    res.render("pages/home");
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