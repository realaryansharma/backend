const express =  require("express");
const app = express();

app.set("view engine", "ejs");

// app.use(function(req, res, next) {
//     // res.send("I am the MIDDLEWARE");
//     console.log("Middleware Working");
//     next();
// });

app.use(express.static('./public'))

// Middlewares will be executed in order.
// There can be only one respond(res) that can be sent back to the cliet, therefore if I will use res.send in middleware(not appropiate) then even after using next
// no routing method will be able to send the response

app.get("/", function(req, res){
    res.render("index", {age: 21});
});

app.get("/error", function(req, res, next){
    throw Error("something WentWrong");
});

app.get("/profile", function(req, res){
    res.send("m to profile hu dostooo!");
});

app.get("/profile/:userName", function(req, res) {
    res.send(`hellloooo ${req.params.userName}`);
});

app.use(function errorHandler(err, req, res, next){
    if(res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render('error', {error: err})
}) 

app.listen(3000);

