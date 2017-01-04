var express = require ('express');
var app = express();

//Hosting static files
app.use(express.static(__dirname + '/'));
console.log("Static files initialized...");

//Routing
app.get("/", function(req,res){
    
    res.send("Hello World");
});

app.get("/views/index.html", function(req,res){
    
    res.send("Kaba");
});

//app.get("/Taxes", function(req,res){
//    
//    res.send("Welcome to California");
//});

//Launching server
app.listen(8080, function (req,res){
    console.log("opening port 8080");
    console.log('application launched at localhost:800');
});