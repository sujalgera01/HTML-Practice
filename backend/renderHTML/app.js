var express = require("express");
var app = express();

app.get("/",function(req,res){
    res.render("home.ejs");
});

app.get("/friend/:name",function(req,res){
    var name = req.params.name;
    res.render("friend.ejs",{names: name});
})

app.listen("3000",function(){
    console.log("server started...");
});