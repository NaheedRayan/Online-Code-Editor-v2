const express = require('express')
const app = express()
var flash = require('connect-flash');
const port = 3000

// for using css 
app.use(express.static(__dirname + '/public'));

app.use(flash());

var session = require('express-session');
app.use(session({ cookie: { maxAge: 60000 }, 
                  secret: 'woot',
                  resave: false, 
                  saveUninitialized: false}));

// set the view engine to ejs
app.set('view engine', 'ejs');


// for POST requests from the form
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// for home route
const home = require('./routes/home')
app.use("/home" , home )

// for home route
const signup = require('./routes/signup')
app.use("/signup" , signup )

// for home route
const signin = require('./routes/signin')
app.use("/signin" , signin )





app.get('/', (req, res) => {

  res.send("FROM THE SERVER")
  // res.render("pages/home");
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})