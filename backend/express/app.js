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

app.get("/r/:name", function(req,res){
    res.send("Welcome to subreddit");
});

app.get("*",function(req,res){
    res.send("Yoiu are on a random page..");
});

app.listen("3000", function(){
    console.log("server has started...");
});