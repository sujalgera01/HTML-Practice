var express = require("express");
var app = express();

app.get("/repos/:owner/:repo/issues",function(req,res){

});

library(httr)
req <- GET("https://api.github.com/repos/hadley/dplyr/issues", 
           query = list(state = "all", per_page = 100, page = 1))

app.listen("3000", function(){
    console.log("server has started...");
});