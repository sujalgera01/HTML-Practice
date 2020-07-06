var express = require("express")
var app = express();

app.get("/",function(req,res){
    res.send("Hi there, Welcome to my assignment");
});

app.get("/speak/:animalName",function(req,res){
    var animalName = req.params.animalName;
    if(animalName == "pig"){
        res.send("The "+ animalName + " says " + "Oink" );
    }
    else if(animalName == "cow"){
        res.send("The "+ animalName + " says " + "Moo" );

    }
    else if(animalName == "dog"){
        res.send("The "+ animalName + " says " + "Woof Woof!" );

    }
});

app.get("/speak/repeat/:name/:id",function(req,res){
    var name = req.params.name;
    var id = req.params.id;
    var result = "";
        for(var i=0; i<id; i++){
            result = result+ " " + name;
        }
        res.send(result);
});

app.get("*",function(req,res){
    res.send("Sorry, Page not found...What re you doing with your life?");
});

app.listen("3001",function(req,res){
    console.log("Server has started");
});