// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,function(req, res){
    res.send(__dirname + "/signup.html")
})

app.listen(3000, function(){
    console.log("server is running on port 3000");
});