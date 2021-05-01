const express = require('express')
const app = express()
const port = 3000

// for using css 
app.use(express.static(__dirname + '/public'));

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