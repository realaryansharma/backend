// Express Js: Routing, server management, req handling etc.
// Creating http(using which server communicates and does all the work), but it is difficult, so we will write all the server code with the 
// help of express.

// Dynamic Routing - Think of multiple routes (http://profile/aryan, http://profile/kanav, etc) in these routes we have a section of the url same;
// so we don't want to write same percentage of url whenever we are writing app.get, therefore we will be using the concept of Dynamic Routing.
// app.get("/profile/:userName")
// res.send(`Hello ${req.params.userName}`) -ROUTE PARAMETERS-

Template engines:a markup style that would be convereted into html file later on.

we will be using ejs - STEPS ->

1. ejs install
    npm i ejs
2. configure ejs
    app.set("view engine", "ejs");
3. create a views folder
4. create an ejs file
5. Render instead of send (write the name of the file in the views dir)

Static Files ->

1. Create a folder "public"
2. Append three folders in it images, stylesheet, javascripts
3. Configure express Static
4. Understand the path