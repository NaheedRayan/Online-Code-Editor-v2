const express = require('express')
const app = express()
const flash = require('connect-flash');
const port = 3000

// for using css 
app.use(express.static(__dirname + '/public'));
// for POST requests from the form
app.use(express.urlencoded({extended: false}));
app.use(express.json());
// for flash
app.use(flash());
const session = require('express-session');
app.use(session({
    cookie: {maxAge: 60000},
    saveUninitialized: false,
    resave: false ,
    secret: 'secret'
}));
// Global Vars
app.use(function (req, res, next) {
    res.locals.message = req.flash();
    next();
});
// set the view engine to ejs
app.set('view engine', 'ejs');



// for home route
const home = require('./routes/home')
app.use("/home", home)

// for home route
const signup = require('./routes/signup')
app.use("/signup", signup)

// for home route
const signin = require('./routes/signin')
app.use("/signin", signin)





app.get('/', (req, res) => {
    res.send("FROM THE SERVER")
    // res.render("pages/home");
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})