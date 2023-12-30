var express = require('express');
const app = express();

var oneLinerJoke = require('one-liner-joke');

app.get("/", function(req, res) {
    res.send('First Page')
})


app.get("/blah", function(req, res) {
    res.send('Hello World')
    console.log(oneLinerJoke.getRandomJoke());
})

app.use("/blah", (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

app.listen(3000)

// app.use is nothing but a middleware, which executes before the app.get(according to the specific path executes, hence can be used for sanitizing the filtering)
// and many other purposes