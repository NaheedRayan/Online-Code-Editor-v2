const express = require("express");
let router = express.Router();



router.get("/",isLoggedIn, (req, res) => {
    console.log("inside editor.js")
    res.render("pages/editor");
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