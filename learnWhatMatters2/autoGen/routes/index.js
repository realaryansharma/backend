var express = require('express');
var router = express.Router();
const userModel = require("./users")
const passport = require("passport");
const localStrategy = require("passport-local");

passport.use(new localStrategy(userModel.authenticate()));

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

router.get("/profile", isLoggedIn,function(req, res) {
  res.send("Welcome to profile");
});

router.post("/register", function(req, res) {
  var userdata = new userModel({
    username: String,
    secret: String
  });

  userModel.register(userdata, req.body.password)
  .then(function(registereduser) {
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile");
    });
  });

});


router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req, res){});

router.get("/logout", function(req, res, next){
  req.logout(function(err) {
    if(err) return next(err);
    res.redirect("/");
  });
});

function isLoggedIn(req, res, next) {

  if(req.isAuthenticated()){
    return next();
  }

  res.redirect("/");

}


// Sessionnnn

// router.post("/create", async function(req, res) {

//   // we have included session mod in app.js
//   // now, to create a session we will write

//   req.session.IAMSESSION = "meriDetails";
//   // name of session - IAMSESSION, value in the session "meriDetails";

//   // to delete the session type: req.session.destroy()

//   const userCreated = await userModel.create({
//     username: req.body.username,
//     password: req.body.password,
//     secret: req.body.secret
//   });

//   res.send(userCreated);
//   // // if placed outside this, the above code is async(will be given a side stack), but res.send is sync, therefore will be executed even before the
//   // the model is created; Hence, await is used in userModel(to use "await" the function should be async)

// });

// // Now, I want to print all those users
// router.get("/getUsers", async function(req, res) {
//   let getUsers = await userModel.find();
//   //similarly to get one single user name we use - await userModel.findOne({userName: "Aryan"}); similarly findOneAndDeltes
//   // res.send(await userModel.find({userName: "realaryansharma"}));
//   await userModel.findOneAndDelete({userName: "realaryansharma"});
//   res.send(getUsers);
// });

// Cookiesssssss

/*
router.get("/", function (req, res) {
  res.cookie("age", 21);
  res.render("index");
});
// this is server sending the cookies to client

router.get("/read", function(req, res) {
  conosle.log(req.cookies);
  res.send("vhecl");
}); 


*/

module.exports = router;
