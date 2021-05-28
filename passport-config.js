const LocalStrategy = require('passport-local').Strategy; // load all the things we need
const DbService = require("./models/database");





// expose this function to our app using module.exports
module.exports = function (passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {

        const db = DbService.getServiceInstance();
        const result = db.getUserById(id)

        result.then(result => {
            console.log(result)
            if (result.length) {
                // all is well, return successful user
                return done(null , result[0])
            } else {
                return done(null, false); 
            }
        }).catch(err => {
            console.log(err)
            return done(null, false, req.flash("error", "Something went wrong")); // create the loginMessage and save it to session as flashdata
        })
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-signup',
        new LocalStrategy({
            // by default, local strategy uses username and password, we will override with email
            usernameField : 'email' ,
            passwordField : 'password' , 
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },function(req , username , email , done){
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
                        // console.log(data[0]);
                        // req.flash("error", "The username exists!!");
                        // res.redirect("/signup");
                        return done(null, false, req.flash("error", "The username exists!!")); // create the loginMessage and save it to session as flashdata

                    } else if (data[0].length == 0 && data[1].length) {
                        // console.log(data[1]);
                        // req.flash("error", "The email exists!!");
                        // res.redirect("/signup");
                        return done(null, false, req.flash("error", "The email exists!!")); // create the loginMessage and save it to session as flashdata

                    } else if (data[0].length && data[1].length) {
                        // console.log(data[1]);
                        // req.flash("error", "The username and email already exists!!");
                        // res.redirect("/signup");
                        return done(null, false, req.flash("error", "The username and email already exists!!")); // create the loginMessage and save it to session as flashdata

                    } else if (req.body.password != req.body.confirm_password) {
                        // req.flash("error", "Passwords do not match");
                        // res.redirect("/signup");
                        return done(null, false, req.flash("error", "Passwords do not match")); // create the loginMessage and save it to session as flashdata

                    } else {
                        let val = [
                            [username, email, password]
                        ];
                        let result = db.saveNewUserData(val);
                        result
                            .then(data => {
                                // console.log(data)
                                // req.flash("success", "User successfully registered");
                                // res.redirect("/editor")
                                // all is well, return successful user
                                let newUser = {
                                    username:req.body.username , 
                                    email: req.body.email,
                                    password: req.body.password,

                                }
                                newUser.id = data.insertId;// we have to add the inserted id to the newUser
                                console.log(newUser)
                                return done(null , newUser ,req.flash("success", "Signup Successful"))//we have to pass the object for serialization
                    
                            })
                            .catch(err => {
                                console.log(err);
                                // res.redirect("/signup");
                                return done(null, false, req.flash("error", "Something went wrong")); // create the loginMessage and save it to session as flashdata

                            })

                    }

                })
                .catch(err => console.log(err))

        } else {
            req.flash("error", "Something went wrong!!");
            res.redirect("/signup");
        }
        
            
        })
    )
    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use(
        'local-login',
        new LocalStrategy({
                // by default, local strategy uses username and password, we will override with email
                usernameField: 'username_or_email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function (req, username_or_email, password, done) { // callback with email and password from our form

                console.log("++++++++++++++++++++++++++++++++++++++")
                console.log(req.body.remember)//on
                // if the remember button is clicked
                if (req.body.remember) {
                    req.session.cookie.maxAge = 7*24*60*60*1000; // remember for 7 days
                } else {
                    req.session.cookie.expires = false;
                }

                const db = DbService.getServiceInstance();
                const result = db.getPassword_for_email_or_username(username_or_email, password);

                result.then(result => {
                    console.log(result)
                    if (result.length) {
                        // all is well, return successful user
                        return done(null , result[0],req.flash("success", "Login Successful"))
                    } else {
                        return done(null, false, req.flash("error", "Invalid Username or Password")); // create the loginMessage and save it to session as flashdata
                    }
                }).catch(err => {
                    console.log(err)
                    return done(null, false, req.flash("error", "Something went wrong")); // create the loginMessage and save it to session as flashdata
                })

               
            })
    );
};