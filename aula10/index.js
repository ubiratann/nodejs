const express = require("express")
const app = express()

app.get("/",function(req,res){
  res.sendFile(__dirname+"/html/index.html")
})

app.get("/about",function(req,res){
  res.sendFile(__dirname+"/html/about.html")
})

app.listen(8081, function() {
    console.log("Server up!");
})
