// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/" ,function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req, res){
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;
    
    const data ={
        members: [
            {
                email_address: email,
                status: "subcribed",
                me_field:{
                    FNAME: firstname,
                    LNAME: lastname,
                }

            }
        ]
    }
  const jsonData = JSON.stringify(data);

   const url = "https://us14.api.mailchimp.com/3.0/lists/d54e6429b2";
   
   const options ={
       method:"POST",
       auth:"sanjai:cc8094653c0225d9c513272376f7357b-us14"
   }

   const request = https.request(url, options,  function(response){
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    }) 
    
    request.write(jsonData);
    request.end();
});

app.listen(3000, function(){
    console.log("server is running on port 3000");
});


// api key 
// cc8094653c0225d9c513272376f7357b-us14

// list id
// d54e6429b2