// app.js

require('dotenv').config()
// set up ======================================================================
// get all the tools we need
const express = require('express')
const app = express()
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const passport = require('passport')
const session = require('express-session');
// const DbService = require("./models/database");
const port = process.env.PORT

// configuration ===============================================================

// require('./passport-config')(passport); // pass passport for configuration
// for using css 
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/images'));


// set up our express application
app.use(express.urlencoded({extended: false}));// for POST requests from the form
app.use(express.json());// for POST requests from the form
app.use(cookieParser()); // read cookies (needed for auth)


app.set('view engine', 'ejs');// setting the view engine to ejs

// required for passport
app.use(session({
    cookie: {
        maxAge: 1000*60*5 //5 min
    },
    saveUninitialized: false,
    resave: false,
    secret: 'secret'
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// Global Vars
app.use(function (req, res, next) {
    res.locals.message = req.flash();
    res.locals.user = req.user;//passing the user object to rendering engine(ejs) for auth based render
    next();
});


// just for debugging
app.use((req,res ,next)=>{
    console.log("===========Session========= "+req.session);
    console.log(req.session);
    console.log("============User=========== "+req.user)
    console.log(req.user)
    next();
})



app.get('/logout', (req,res)=>{
    req.logout();
    res.redirect('/home');
})

// for home route
const home = require('./routes/home')
app.use("/home", home)
app.use("/", home)

// for signup route
const signup = require('./routes/signup')
app.use("/signup", signup)

// for signin route
const signin = require('./routes/signin')
app.use("/signin", signin)

// for editor route
const editor = require('./routes/editor')
app.use("/editor", editor)



// app.get('/', (req, res) => {
//     res.send("FROM THE SERVER")
//     // res.render("pages/home");
// })



app.listen(port,"0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`)
})