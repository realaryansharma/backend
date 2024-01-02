var express = require('express');
var router = express.Router();
const userModel = require("./users")

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index");
});

// Sessionnnn

router.get("/create", async function(req, res) {

  // we have included session mod in app.js
  // now, to create a session we will write

  req.session.IAMSESSION = "meriDetails";
  // name of session - IAMSESSION, value in the session "meriDetails";

  // to delete the session type: req.session.destroy()

  const userCreated = await userModel.create({
    userName: "ankushandilya",
    name: "ankush",
    age: 45
  });

  res.send(userCreated);
  // // if placed outside this, the above code is async(will be given a side stack), but res.send is sync, therefore will be executed even before the
  // the model is created; Hence, await is used in userModel(to use "await" the function should be async)

});

// Now, I want to print all those users
router.get("/getUsers", async function(req, res) {
  let getUsers = await userModel.find();
  //similarly to get one single user name we use - await userModel.findOne({userName: "Aryan"}); similarly findOneAndDeltes
  // res.send(await userModel.find({userName: "realaryansharma"}));
  await userModel.findOneAndDelete({userName: "realaryansharma"});
  res.send(getUsers);
});

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
