const express = require("express");
const app = express()

app.set("view engine", "ejs");
app.use(express.static('./public'))

app.get("/", function(req, res) {
    res.send("Bro, type username in the url XD");
});

app.get("/:username", function(req, res) {
    res.render("index", {name: req.params.username});
});


app.listen(3000)