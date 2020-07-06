//Started Express...
var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hey! Welcome");
});

app.get("/hey",function(req,res){
    res.send("Hello, How are you ?");
});

app.get("/bye",function(req,res){
    console.log("bye server");
    res.send("Good Bye!! ?");
});

app.get("/r/:name/comments/:id/:title", function(req,res){
    console.log(req.params)
    res.send("Welcome to comments page");
});


app.get("/r/:name", function(req,res){
    var name = req.params.name;
    res.send("Welcome to the" + name.toUpperCase() + "subreddit");
});

app.get("*",function(req,res){
    res.send("You are on a random page..");
});

app.listen("3000", function(){
    console.log("server has started...");
});