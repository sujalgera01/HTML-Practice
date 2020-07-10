var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/friend/:name",function(req,res){
    var name = req.params.name;
    res.render("friend.ejs",{names: name});
});

app.get("/posts",function(req,res){
    var posts = [
        {title: "Post1", author: "Sujal"},
        {title: "Post2", author:  "Anmol"},
        {title: "Post3", author:  "mohit"},
        {title: "Post4", author:  "Mradul"},
    ];
    res.render("post.ejs", {post: posts});
});

app.listen("3000",function(){
    console.log("server started...");
});