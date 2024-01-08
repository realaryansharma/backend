var express = require('express');
var router = express.Router();
const passport = require("passport");
const userModel = require("./users");

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Register User

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));

router.post('/register', async function(req, res) {

  const userdata = await userModel.create({
    username: req.body.username,
    secret: req.body.secret
  });
  
  userModel.register(userdata, req.body.password)
  .then(function(registereduser) {
      // passport.authenticate("local")(req, res, function() {
      //   res.redirect('/profile');
      // })
      console.log(registereduser);
  })

});

//Register User Ended

//Log In

router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  faliureRedirect: "/"
}), function(req, res) {});

//Log In Ended


function isLoggedIn(req, res, next) {
  if(req.isAuthentication()) {
    return next();
  }
  res.redirect("/");
}

router.get('/profile', isLoggedIn,function(req, res) {
  res.send('welcome to profile');
});

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if(err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
