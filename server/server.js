var express= require("express");
var bodyparser= require("body-parser")

var cors=require("cors")
var app= express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors());
var module1= require("./login/login1")
app.use("/login1",module1)

app.listen(8080);
console.log("server listen the port :8080")