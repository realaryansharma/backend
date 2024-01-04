var express = require('express');
var router = express.Router();

const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get("/create", async function(req, res) {
  let userdata = await userModel.create({
    username: "aryanendra",
    nickname: "punjabi",
    description: "just born ham ham",
    categories: ['butter', 'dance']
  });

  res.send(userdata);


});

router.get("/find", async function(req, res) {
  
  var regex = new RegExp("aryan", 'i');
  // this will perform some operation upon "aryan", then upon search you will get all the values including those thich are
  // case sensitive and those which may have extra characters added to the word aryan...
  let user = await userModel.find({username: regex});
  res.send(user);

});

// router.get("/create", function(req, res) {
//   //if credentials are right, show the login page
//   //else take me to the /error route where show the user that you have entered wrong credentials
//   req.flash("age", 21);
//   res.send("Data Created!");
// });

// router.get("/verify", function(req, res) {
//   console.log(req.flash("age"));
//   res.send("Check it on terminal vrooo");
// });

module.exports = router;
